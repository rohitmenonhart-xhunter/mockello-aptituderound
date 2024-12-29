import React from 'react';
import { Timer } from './Timer';

interface TimerContainerProps {
  questionTimeLimit: number;
  totalTestTime: number;
  onQuestionTimeUp: () => void;
  onTestTimeUp: () => void;
}

export const TimerContainer: React.FC<TimerContainerProps> = ({
  questionTimeLimit,
  totalTestTime,
  onQuestionTimeUp,
  onTestTimeUp,
}) => {
  return (
    <div className="fixed top-20 right-6 space-y-4">
      <Timer
        duration={questionTimeLimit}
        onTimeUp={onQuestionTimeUp}
        label="Question Time"
      />
      <Timer
        duration={totalTestTime}
        onTimeUp={onTestTimeUp}
        label="Total Test Time"
        className="bg-gray-800"
      />
    </div>
  );
};