import React from 'react';
import { TestResult } from '../../types';

interface ScoreCardProps {
  results: TestResult;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ results }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Overall Score</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Accuracy</span>
          <span className="text-2xl font-bold text-blue-600">
            {results.accuracy.toFixed(1)}%
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Correct Answers</span>
          <span className="text-lg font-semibold text-green-600">
            {results.correctAnswers} / {results.totalQuestions}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Time</span>
          <span className="text-lg font-semibold text-purple-600">
            {Math.floor(results.totalTime / 60)}m {results.totalTime % 60}s
          </span>
        </div>
      </div>
    </div>
  );
};