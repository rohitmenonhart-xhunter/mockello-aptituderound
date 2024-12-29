import React, { useState } from 'react';
import { ProgrammingLanguage } from '../types';

interface CodeEditorProps {
  onSubmit: (code: string, language: ProgrammingLanguage) => void;
  languages: ProgrammingLanguage[];
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ onSubmit, languages }) => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<ProgrammingLanguage>(languages[0]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as ProgrammingLanguage)}
          className="px-4 py-2 border rounded-md bg-gray-50"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
        <button
          onClick={() => onSubmit(code, language)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Run Tests
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-gray-100 rounded-md"
        placeholder="Write your code here..."
      />
    </div>
  );
};