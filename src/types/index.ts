export type QuestionType = 'VERBAL' | 'LOGICAL' | 'QUANTITATIVE' | 'CODING';
export type ProgrammingLanguage = 'javascript' | 'python' | 'java' | 'cpp' | 'c';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer?: string;
  answers?: string[];
  blanksCount?: number;
  timeLimit: number;
  difficulty: Difficulty;
  explanation: string;
  testCases?: TestCase[];
  programmingLanguages?: ProgrammingLanguage[];
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer?: string;
  code?: string;
  language?: ProgrammingLanguage;
  timeTaken: number;
  isCorrect: boolean;
  startTime: number;
  endTime: number;
}

export interface CategoryScore {
  total: number;
  correct: number;
  accuracy: number;
}

export interface TestResult {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  accuracy: number;
  categoryScores: {
    [key in QuestionType]?: CategoryScore;
  };
}