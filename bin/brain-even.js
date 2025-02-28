#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const playGame = () => {
    let countSum = 0;
    const name = game();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    do {
        const randomNum = () => Math.floor(Math.random() * 100) + 1;
        const isEven = (num) => num % 2 === 0;
        const randomNumResult = randomNum();
        const correctAnswer = isEven(randomNumResult) ? 'yes' : 'no';

        console.log(`question ${randomNumResult}`);
        const userAnswer = readlineSync.question('You answer: ');
        if (correctAnswer === userAnswer) {
            console.log('Correct');
            countSum += 1;
        } else {
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
            console.log(`Let's try again, ${name}!`);
            return;
        }
    } while (countSum < 3);
    console.log(`Congratulations, ${name}`);
};

playGame();
