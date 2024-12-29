import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Mockello</h1>
            <span className="ml-2 text-sm text-gray-500">Aptitude Test</span>
          </div>
        </div>
      </div>
    </header>
  );
};