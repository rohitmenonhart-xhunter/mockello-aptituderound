import { UserAnswer, TestResult, Question } from '../types';

export const calculateResults = (answers: UserAnswer[], questions: Question[]): TestResult => {
  // Filter out question 68 from calculations
  const filteredAnswers = answers.filter(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    return question?.id !== '68';
  });

  const totalQuestions = filteredAnswers.length;
  const correctAnswers = filteredAnswers.filter(a => a.isCorrect).length;
  const totalTime = filteredAnswers.reduce((sum, a) => sum + (a.endTime - a.startTime) / 1000, 0);
  const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  const categoryScores = filteredAnswers.reduce((acc, answer) => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return acc;
    
    const type = question.type;
    if (!acc[type]) {
      acc[type] = { total: 0, correct: 0, accuracy: 0 };
    }
    
    acc[type].total++;
    if (answer.isCorrect) acc[type].correct++;
    acc[type].accuracy = (acc[type].correct / acc[type].total) * 100;
    
    return acc;
  }, {} as TestResult['categoryScores']);

  return {
    totalQuestions,
    correctAnswers,
    totalTime,
    accuracy,
    categoryScores,
  };
};