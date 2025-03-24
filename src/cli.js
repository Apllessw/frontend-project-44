import readlineSync from 'readline-sync';

export default function game() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function generateRandNum(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

export function generateProgression() {
  const arr = [];

  const length = generateRandNum(5, 10);
  const num1 = generateRandNum(1, 10);
  const steps = generateRandNum(1, 5);
  for (let i = 0; i < length; i += 1) {
    arr.push(num1 + i * steps);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenElement = arr[hiddenIndex];
  arr[hiddenIndex] = '..';
  return {
    progression: arr.join(' '),
    hiddenElement,
  };
}

export function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

export const checkAnswer = (answer, correct, name) => {
  if (correct === answer) {
    console.log('Correct');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
