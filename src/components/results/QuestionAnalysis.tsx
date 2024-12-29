import React from 'react';
import { Question, UserAnswer } from '../../types';

interface QuestionAnalysisProps {
  questions: Question[];
  answers: UserAnswer[];
}

export const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ questions, answers }) => {
  // Filter out question 68
  const filteredAnswers = answers.filter(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    return question?.id !== '68';
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Question Analysis</h2>
      
      <div className="space-y-6">
        {filteredAnswers.map((answer, index) => {
          const question = questions.find(q => q.id === answer.questionId)!;
          const timeTaken = (answer.endTime - answer.startTime) / 1000; // Convert to seconds
          
          return (
            <div 
              key={question.id} 
              className={`p-4 rounded-lg border ${
                answer.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium">Question {index + 1}</span>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded text-sm ${
                    answer.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {answer.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                  <div className="mt-1 text-sm text-gray-600">
                    Time: {timeTaken.toFixed(1)}s
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Difficulty: {question.difficulty}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-2">{question.question}</p>
              
              {!answer.isCorrect && (
                <div className="mt-4 p-4 bg-white rounded border border-red-100">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Explanation:</h4>
                  <p className="text-sm text-gray-600">{question.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};