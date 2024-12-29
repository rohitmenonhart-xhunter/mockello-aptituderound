import React from 'react';
import { TestResult } from '../../types';

interface TimingAnalysisProps {
  results: TestResult;
}

export const TimingAnalysis: React.FC<TimingAnalysisProps> = ({ results }) => {
  const averageTimePerQuestion = results.totalTime / results.totalQuestions;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Timing Analysis</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Average Time per Question</span>
          <span className="text-lg font-semibold text-blue-600">
            {averageTimePerQuestion.toFixed(1)}s
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Test Duration</span>
          <span className="text-lg font-semibold text-purple-600">
            {Math.floor(results.totalTime / 60)}m {results.totalTime % 60}s
          </span>
        </div>
      </div>
    </div>
  );
};