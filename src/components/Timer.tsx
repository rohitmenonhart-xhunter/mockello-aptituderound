import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  label: string;
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({ 
  duration, 
  onTimeUp, 
  label,
  className = "bg-white"
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset timer when duration changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const getTimerColor = () => {
    if (timeLeft > duration * 0.5) return 'text-green-600';
    if (timeLeft > duration * 0.25) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`${className} p-6 rounded-xl shadow-lg border border-gray-100`}>
      <div className={`text-3xl font-bold ${getTimerColor()} transition-colors duration-300`}>
        {formatTime(timeLeft)}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
};