#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { generateRandNum } from '../src/cli.js';

function getGCD(a, b) {
  if (a === 0) return b;
  return getGCD(b % a, a);
}

const gcdGame = () => {
  const userName = game();
  console.log('Find the greatest common divisor of given numbers.');

  let isWin = true;
  for (let i = 0; i < 3 && isWin; i += 1) {
    const num1 = generateRandNum(1, 10);
    const num2 = generateRandNum(1, 10);

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
