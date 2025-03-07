#!/usr/bin/env node
import readlineSync from 'readline-sync';

function generateRandNum(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getGCD(a, b) {
  if (a === 0) return b;
  return getGCD(b % a, a);
}

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let isWin = true;
  for (let i = 0; i < 3 && isWin; i += 1) {
    const num1 = generateRandNum();
    const num2 = generateRandNum();

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    const correctAnswer = getGCD(num1, num2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      isWin = false;
      break;
    }
  }

  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};
gcdGame();
