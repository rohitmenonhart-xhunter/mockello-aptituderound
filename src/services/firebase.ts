import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { colleges } from '../data/colleges';
import { UserDetails } from '../types/user';
import { TestResult, Question, UserAnswer } from '../types';

const getFirebaseConfig = (collegeId: string) => {
  const college = colleges.find(c => c.id === collegeId);
  if (!college) throw new Error('Invalid college ID');

  return {
    apiKey: college.apiKey,
    authDomain: college.authDomain,
    databaseURL: college.databaseUrl,
    projectId: college.projectId,
    storageBucket: college.storageBucket,
    messagingSenderId: college.messagingSenderId,
    appId: college.appId,
    measurementId: college.measurementId
  };
};

interface IncorrectAnswer {
  question: Question;
  userAnswer: UserAnswer;
  explanation: string;
}

export const saveTestResults = async (
  userDetails: UserDetails,
  testResults: TestResult,
  answers: UserAnswer[],
  questions: Question[]
) => {
  const app = initializeApp(getFirebaseConfig(userDetails.college));
  const db = getDatabase(app);
  
  // Calculate category-wise scores
  const categories = ['CODING', 'VERBAL', 'LOGICAL', 'QUANTITATIVE'];
  const categoryScores = categories.reduce((acc, category) => {
    const categoryQuestions = questions.filter(q => q.type === category);
    const categoryAnswers = answers.filter(a => 
      categoryQuestions.some(q => q.id === a.questionId)
    );
    const correct = categoryAnswers.filter(a => a.isCorrect).length;
    const total = categoryAnswers.length;
    
    acc[category] = {
      accuracy: total > 0 ? (correct / total) * 100 : 0,
      correct,
      total
    };
    return acc;
  }, {} as Record<string, { accuracy: number; correct: number; total: number; }>);

  const resultRef = ref(db, `results/${userDetails.registerNumber}`);
  await set(resultRef, {
    userDetails,
    testResults: {
      accuracy: (answers.filter(a => a.isCorrect).length / answers.length) * 100,
      categoryScores,
      correctAnswers: answers.filter(a => a.isCorrect).length,
      totalQuestions: answers.length,
      totalTime: answers.reduce((sum, a) => sum + (a.endTime - a.startTime), 0)
    },
    timestamp: new Date().toISOString()
  });
};