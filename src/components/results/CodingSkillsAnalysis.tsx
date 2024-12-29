import React from 'react';
import { Question, UserAnswer } from '../../types';

interface CodingSkillsAnalysisProps {
  questions: Question[];
  answers: UserAnswer[];
}

export const CodingSkillsAnalysis: React.FC<CodingSkillsAnalysisProps> = ({ questions, answers }) => {
  const codingQuestions = questions.filter(q => q.type === 'CODING' && q.id !== '68');
  const codingAnswers = answers.filter(a => 
    codingQuestions.some(q => q.id === a.questionId)
  );

  const totalCodingQuestions = codingQuestions.length;
  const correctCodingAnswers = codingAnswers.filter(a => a.isCorrect).length;
  const accuracy = totalCodingQuestions > 0 
    ? (correctCodingAnswers / totalCodingQuestions) * 100 
    : 0;

  const averageTime = codingAnswers.length > 0
    ? codingAnswers.reduce((sum, a) => sum + a.timeTaken, 0) / codingAnswers.length / 1000
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Coding Skills Analysis</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Coding Accuracy</span>
          <span className="text-2xl font-bold text-blue-600">
            {accuracy.toFixed(1)}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Problems Solved</span>
          <span className="text-lg font-semibold text-green-600">
            {correctCodingAnswers} / {totalCodingQuestions}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Average Time per Problem</span>
          <span className="text-lg font-semibold text-purple-600">
            {averageTime.toFixed(1)}s
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Problem-wise Analysis</h3>
          {codingQuestions.map((question, index) => {
            const answer = codingAnswers.find(a => a.questionId === question.id);
            return (
              <div key={question.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">Problem {index + 1}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    answer?.isCorrect 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {answer?.isCorrect ? 'Solved' : 'Not Solved'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Time Taken: {answer ? (answer.timeTaken / 1000).toFixed(1) : 0}s
                </p>
                {!answer?.isCorrect && (
                  <div className="mt-2 text-sm text-gray-500">
                    <strong>Tip:</strong> {question.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};