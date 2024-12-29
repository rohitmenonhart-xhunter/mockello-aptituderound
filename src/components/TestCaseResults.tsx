import React from 'react';
import { TestCase } from '../types';

interface TestCaseResultsProps {
  testCases: TestCase[];
  results: boolean[];
}

export const TestCaseResults: React.FC<TestCaseResultsProps> = ({ testCases, results }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Test Case Results</h3>
      <div className="space-y-4">
        {testCases.map((testCase, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              results[index] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Test Case #{index + 1}</span>
              <span
                className={`px-2 py-1 rounded ${
                  results[index] ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {results[index] ? 'PASSED' : 'FAILED'}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">Input:</span>
                <pre className="mt-1 p-2 bg-gray-100 rounded">{testCase.input}</pre>
              </div>
              <div>
                <span className="text-sm text-gray-600">Expected Output:</span>
                <pre className="mt-1 p-2 bg-gray-100 rounded">{testCase.expectedOutput}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};