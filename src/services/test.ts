import { Question, UserAnswer } from '../types';

export const handleAnswer = (
  currentQuestion: Question,
  answer: string,
  startTime: number
): UserAnswer => {
  const endTime = Date.now();
  return {
    questionId: currentQuestion.id,
    selectedAnswer: answer,
    isCorrect: answer === currentQuestion.correctAnswer,
    startTime,
    endTime,
    timeTaken: endTime - startTime
  };
};