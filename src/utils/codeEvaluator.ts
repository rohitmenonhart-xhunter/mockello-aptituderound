import { TestCase } from '../types';

// Language-specific code wrappers
const wrapJavaScript = (code: string): string => {
  return `
    function factorial(n) {
      ${code}
    }
    factorial(Number(input));
  `;
};

const wrapPython = (code: string): string => {
  return `
def factorial(n):
    ${code}
print(factorial(int(input)))
  `.trim();
};

const wrapCpp = (code: string): string => {
  return `
#include <iostream>
using namespace std;

${code}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}
  `.trim();
};

const validateCode = (code: string): boolean => {
  // Basic security checks
  const dangerousPatterns = [
    'process', 'require', 'import', 'eval', 'Function',
    'setTimeout', 'setInterval', 'window', 'document',
    'localStorage', 'sessionStorage', 'indexedDB',
    'fetch', 'XMLHttpRequest', 'WebSocket'
  ];

  return !dangerousPatterns.some(pattern => 
    code.toLowerCase().includes(pattern.toLowerCase())
  );
};

export const handleCodeEvaluation = async (
  code: string, 
  language: string, 
  testCases: TestCase[]
): Promise<boolean[]> => {
  if (!code || code.trim() === '') {
    return testCases.map(() => false);
  }

  if (!validateCode(code)) {
    return testCases.map(() => false);
  }

  try {
    switch (language.toLowerCase()) {
      case 'javascript': {
        const wrappedCode = wrapJavaScript(code);
        return testCases.map(testCase => {
          try {
            const evalFunction = new Function('input', wrappedCode);
            const result = evalFunction(testCase.input);
            return result.toString() === testCase.expectedOutput;
          } catch {
            return false;
          }
        });
      }

      case 'python': {
        // For now, we'll use a mock evaluation
        // In a real implementation, this would send code to a backend
        return testCases.map(testCase => {
          try {
            // Basic validation of Python factorial implementation
            const hasDef = code.includes('def') || code.includes('return');
            const hasMultiplication = code.includes('*') || code.includes('return 1');
            const hasRecursion = code.includes('factorial') || code.includes('return 1');
            return hasDef && hasMultiplication && hasRecursion;
          } catch {
            return false;
          }
        });
      }

      case 'cpp': {
        // For now, we'll use a mock evaluation
        // In a real implementation, this would send code to a backend
        return testCases.map(testCase => {
          try {
            // Basic validation of C++ factorial implementation
            const hasInt = code.includes('int') || code.includes('long');
            const hasReturn = code.includes('return');
            const hasMultiplication = code.includes('*') || code.includes('return 1');
            return hasInt && hasReturn && hasMultiplication;
          } catch {
            return false;
          }
        });
      }

      default:
        return testCases.map(() => false);
    }
  } catch {
    return testCases.map(() => false);
  }
};