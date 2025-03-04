#!/usr/bin/env node


const readlineSync = require('readline-sync');


const operations = ['+', '-', '*'];


const generateExpression = () => {

  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  return { num1, num2, operation };
};

const calculateExpression = ({ num1, num2, operation }) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operation}`);
  }
};

const playGame = () => {
  let score = 0;
  let attempts = 3;

  console.log("Welcome to the math game!");
  const playerName = readlineSync.question("Enter your name: ");
  console.log(`Hello, ${playerName}! Let's start the game.`);

  while (attempts > 0) {
    const { num1, num2, operation } = generateExpression();
    
    const userAnswer = parseFloat(readlineSync.question(`Question: ${num1} ${operation} ${num2} = `));
    
    const correctAnswer = calculateExpression({ num1, num2, operation });
    
    if (isNaN(userAnswer)) {
      console.log("Invalid input. Please enter a number.");
      continue;
    }
    
    if (userAnswer === correctAnswer) {
      console.log("Correct! Well done!");
      score++;
    } else {
      console.log(`Wrong! The correct answer was: ${correctAnswer}.`);
    }
    
    attempts--;
    console.log(`You have ${attempts} attempt(s) left.\n`);
  }

  console.log(`Game over! Your final score is: ${score}.\nThanks for playing, ${playerName}!`);
};

playGame(); 