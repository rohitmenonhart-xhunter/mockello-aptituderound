import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScoreCard } from '../components/results/ScoreCard';
import { CategoryBreakdown } from '../components/results/CategoryBreakdown';
import { TimingAnalysis } from '../components/results/TimingAnalysis';
import { QuestionAnalysis } from '../components/results/QuestionAnalysis';
import { CodingSkillsAnalysis } from '../components/results/CodingSkillsAnalysis';
import { calculateResults } from '../utils/resultCalculator';
import { exportResultsToPDF } from '../utils/pdfExport';
import { saveTestResults } from '../services/firebase';
import { UserDetails } from '../types/user';

export const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const answers = location.state?.answers || [];
  const questions = location.state?.questions || [];
  const userDetails = location.state?.userDetails;

  React.useEffect(() => {
    if (!location.state) {
      console.error('No test data found');
      navigate('/');
      return;
    }

    if (!userDetails) {
      console.error('No user details found');
      navigate('/');
      return;
    }

    if (answers.length === 0 || questions.length === 0) {
      console.error('Missing answers or questions data');
      navigate('/');
      return;
    }
  }, [location.state, userDetails, answers, questions, navigate]);

  const results = React.useMemo(() => 
    calculateResults(answers, questions), 
    [answers, questions]
  );

  React.useEffect(() => {
    if (userDetails && results) {
      saveTestResults(userDetails, results, answers, questions).catch(console.error);
    }
  }, [userDetails, results, answers, questions]);

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Calculating results...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6" id="results-container">
        {/* User Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Name: <span className="font-medium">{userDetails.name}</span></p>
              <p className="text-gray-600">Register Number: <span className="font-medium">{userDetails.registerNumber}</span></p>
              <p className="text-gray-600">Branch: <span className="font-medium">{userDetails.branch}</span></p>
            </div>
            <div>
              <p className="text-gray-600">Year: <span className="font-medium">{userDetails.yearOfStudy}</span></p>
              <p className="text-gray-600">Email: <span className="font-medium">{userDetails.email}</span></p>
              <p className="text-gray-600">College: <span className="font-medium">{userDetails.college}</span></p>
            </div>
          </div>
        </div>

        <ScoreCard results={results} />
        <CategoryBreakdown results={results} />
        <CodingSkillsAnalysis questions={questions} answers={answers} />
        <TimingAnalysis results={results} />
        <QuestionAnalysis questions={questions} answers={answers} />
        
        <button
          onClick={() => exportResultsToPDF(results)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download Results PDF
        </button>
      </div>
    </div>
  );
};