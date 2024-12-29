import React from 'react';
import { TestResult } from '../../types';

interface CategoryBreakdownProps {
  results: TestResult;
}

export const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ results }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'VERBAL': return 'bg-purple-100 text-purple-800';
      case 'LOGICAL': return 'bg-blue-100 text-blue-800';
      case 'QUANTITATIVE': return 'bg-green-100 text-green-800';
      case 'CODING': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Category Breakdown</h2>
      
      <div className="space-y-4">
        {Object.entries(results.categoryScores).map(([category, score]) => (
          <div key={category} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                {category}
              </span>
              <span className="font-semibold">
                {score.accuracy.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${score.accuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};