import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionCard } from '../components/QuestionCard';
import { TestProgress } from '../components/TestProgress';
import { TestCaseResults } from '../components/TestCaseResults';
import { TimerContainer } from '../components/TimerContainer';
import { UserRegistrationForm } from '../components/UserRegistrationForm';
import { Question, UserAnswer, ProgrammingLanguage } from '../types';
import { UserDetails } from '../types/user';
import { questions } from '../data/questions';
import { handleCodeEvaluation } from '../utils/codeEvaluator';
import { initializeFullscreen } from '../utils/security/fullscreen';
import { handleAnswer } from '../services/test';

const TOTAL_TEST_TIME = 8000; // 1 hour in seconds

// Sort questions to ensure coding questions are at the end
const sortedQuestions = [...questions].sort((a, b) => {
  if (a.type === 'CODING' && b.type !== 'CODING') return 1;
  if (a.type !== 'CODING' && b.type === 'CODING') return -1;
  return 0;
});

export const TestPage: React.FC = () => {
  const navigate = useNavigate();
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [testResults, setTestResults] = useState<boolean[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const handleUserRegistration = (details: UserDetails) => {
    setUserDetails(details);
  };

  const startTest = async () => {
    try {
      await initializeFullscreen();
      setIsTestStarted(true);
      setQuestionStartTime(Date.now());
    } catch (error) {
      alert('Please allow fullscreen mode to start the test.');
    }
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < sortedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setQuestionStartTime(Date.now());
      setTestResults([]); // Reset test results for next question
    } else {
      // Ensure we have all required data before navigation
      if (!userDetails) {
        alert('User details are missing. Please try again.');
        navigate('/');
        return;
      }

      // Navigate with complete state
      navigate('/results', { 
        state: { 
          answers: answers, 
          questions: sortedQuestions,
          userDetails: userDetails
        },
        replace: true 
      });
    }
  };

  const handleAnswerSubmit = (answer: string) => {
    const currentQuestion = sortedQuestions[currentQuestionIndex];
    const userAnswer = handleAnswer(currentQuestion, answer, questionStartTime);
    
    // For coding questions, check exact match with answers array
    if (currentQuestion.type === 'CODING') {
      // Clean up the answer string to handle any whitespace issues
      const cleanAnswer = answer.trim();
      const correctAnswer = currentQuestion.answers?.[0]?.trim();

      // Special handling for the power function question (id: '68')
      if (currentQuestion.id === '68') {
        userAnswer.isCorrect = cleanAnswer === '0, 1, 1, base';
      } else {
        userAnswer.isCorrect = cleanAnswer === correctAnswer;
      }
      
      // Debug log
      console.log('Coding Question Answer Check:', {
        questionId: currentQuestion.id,
        userAnswer: cleanAnswer,
        correctAnswer: correctAnswer,
        isCorrect: userAnswer.isCorrect,
        isLastQuestion: currentQuestion.id === '68'
      });
    }
    
    setAnswers(prev => [...prev, userAnswer]);
    moveToNextQuestion();
  };

  const handleCodeSubmit = async (code: string, language: string) => {
    const currentQuestion = sortedQuestions[currentQuestionIndex];
    
    // Handle fill-in-the-blank coding questions
    if (currentQuestion.blanksCount) {
      handleAnswerSubmit(code);
      return;
    }
    
    // Handle regular coding questions with test cases
    if (!currentQuestion.testCases) {
      const userAnswer = handleAnswer(currentQuestion, code, questionStartTime);
      userAnswer.code = code;
      userAnswer.language = language as ProgrammingLanguage;
      userAnswer.isCorrect = true;
      setAnswers(prev => [...prev, userAnswer]);
      moveToNextQuestion();
      return;
    }

    const results = await handleCodeEvaluation(
      code,
      language,
      currentQuestion.testCases
    );
    
    setTestResults(results);
    
    // Only proceed if all test cases pass
    const allTestsPassed = results.every(result => result);
    if (allTestsPassed) {
      const userAnswer = handleAnswer(currentQuestion, code, questionStartTime);
      userAnswer.code = code;
      userAnswer.language = language as ProgrammingLanguage;
      userAnswer.isCorrect = true;
      setAnswers(prev => [...prev, userAnswer]);
      moveToNextQuestion();
    }
  };

  if (!userDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Student Registration</h1>
          <UserRegistrationForm onSubmit={handleUserRegistration} />
        </div>
      </div>
    );
  }

  if (!isTestStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Ready to Start the Test?</h1>
          <button
            onClick={startTest}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
              transition-colors duration-200 font-medium"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <TestProgress 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={sortedQuestions.length} 
      />
      
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full">
          <QuestionCard
            question={sortedQuestions[currentQuestionIndex]}
            onAnswer={handleAnswerSubmit}
            onCodeSubmit={handleCodeSubmit}
            onTimeUp={moveToNextQuestion}
          />

          {testResults.length > 0 && sortedQuestions[currentQuestionIndex].testCases && (
            <TestCaseResults
              testCases={sortedQuestions[currentQuestionIndex].testCases}
              results={testResults}
            />
          )}
        </div>
        
        <div className="fixed top-20 right-6">
          <TimerContainer
            questionTimeLimit={sortedQuestions[currentQuestionIndex].timeLimit}
            totalTestTime={TOTAL_TEST_TIME}
            onQuestionTimeUp={moveToNextQuestion}
            onTestTimeUp={() => navigate('/results', { 
              state: { answers, questions: sortedQuestions, userDetails },
              replace: true
            })}
          />
        </div>
      </div>
    </div>
  );
};