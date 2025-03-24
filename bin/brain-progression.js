#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { generateProgression, checkAnswer } from '../src/cli.js';

const progressionGame = () => {
  const userName = game();

  let isWin = 0;
  while (isWin < 3) {
    const gameProgress = generateProgression();
    console.log(`Question: ${gameProgress.progression}`);
    const userAnswer = Number(readlineSync.question('Your answer is: '));
    const correctAnswer = gameProgress.hiddenElement;

    if (checkAnswer(Number(userAnswer), correctAnswer, userName)) {
      isWin += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

progressionGame();
