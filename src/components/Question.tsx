import React from 'react';
import { Question as QuestionType } from '../types';
import { Timer } from './Timer';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
  onTimeUp: () => void;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer, onTimeUp }) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Timer duration={question.timeLimit} onTimeUp={onTimeUp} />
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {question.type}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full text-left p-4 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};