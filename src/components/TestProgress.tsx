import React from 'react';

interface TestProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const TestProgress: React.FC<TestProgressProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-gray-200">
      <div 
        className="h-full bg-blue-600 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-2 left-6 text-sm text-gray-600">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </div>
  );
};