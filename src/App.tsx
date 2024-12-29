import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TestPage } from './pages/TestPage';
import { ResultsPage } from './pages/ResultsPage';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-[Inter]">
        <Header />
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;