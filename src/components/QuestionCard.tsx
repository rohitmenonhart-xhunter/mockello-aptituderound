import React from 'react';
import { Question } from '../types';
import { CodeEditor } from './CodeEditor';
import { Timer } from './Timer';
import { Highlight, themes } from 'prism-react-renderer';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  onCodeSubmit?: (code: string, language: string) => void;
  onTimeUp: () => void;
}

const CodeDisplay: React.FC<{ code: string }> = ({ code }) => {
  return (
    <Highlight theme={themes.vsDark} code={code} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="rounded-lg p-4 bg-gray-900 overflow-x-auto">
          <code className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="text-gray-500 mr-4">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onCodeSubmit,
  onTimeUp,
}) => {
  const isCodingQuestion = question.type === 'CODING';

  const getQuestionContent = () => {
    if (!isCodingQuestion) return { text: question.question, code: null };
    
    const parts = question.question.split('javascript\n');
    if (parts.length === 1) return { text: question.question, code: null };
    
    const [intro, rest] = parts;
    const [code, ...explanationParts] = rest.split('\n\n\n');
    
    return { 
      text: intro.trim(), 
      code: code.trim(),
      explanation: explanationParts.join('\n').trim() 
    };
  };

  const { text, code } = getQuestionContent();

  const getQuestionTypeStyles = () => {
    const baseStyles = 'px-3 py-1 rounded-full text-sm font-medium';
    switch (question.type) {
      case 'VERBAL':
        return `${baseStyles} bg-purple-100 text-purple-800`;
      case 'LOGICAL':
        return `${baseStyles} bg-blue-100 text-blue-800`;
      case 'QUANTITATIVE':
        return `${baseStyles} bg-green-100 text-green-800`;
      case 'CODING':
        return `${baseStyles} bg-orange-100 text-orange-800`;
      default:
        return baseStyles;
    }
  };

  const renderCodingOptions = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-6 mt-6">
        <h3 className="text-lg font-medium text-gray-700">Select the correct option:</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-100 bg-white
                hover:border-blue-500 hover:bg-blue-50 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                font-mono"
            >
              <span className="text-lg text-gray-700">{option}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Timer 
        duration={question.timeLimit} 
        onTimeUp={onTimeUp}
        label="Time Remaining"
      />
      
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className={getQuestionTypeStyles()}>
              {question.type}
            </span>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">{text}</h2>
            
            {code && (
              <div className="my-6">
                <CodeDisplay code={code} />
              </div>
            )}
          </div>
          
          {isCodingQuestion ? (
            renderCodingOptions()
          ) : (
            <div className="space-y-4">
              {question.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onAnswer(option)}
                  className="w-full text-left p-6 rounded-xl border-2 border-gray-100 
                    hover:border-blue-500 hover:bg-blue-50 transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <span className="text-lg text-gray-700 font-medium">{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};