import game from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'What number is missing in the progression?';

const getProgration = (startNumber, step, length) => {
  const prograssion = [];
  for (let i = 0; i < length; i += 1) {
    if (prograssion.length === 0) {
      prograssion.push(startNumber);
    } else {
      const previousNumber = prograssion[i - 1];
      const nextNumber = previousNumber + step;
      prograssion.push(nextNumber);
    }
  }
  return prograssion;
};

const getQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(0, 15);
  const step = getRandomNumber(1, 10);
  const recommendedLength = 10;
  const prograssion = getProgration(startNumber, step, recommendedLength);
  const indexOfMissingNumber = getRandomNumber(0, recommendedLength - 1);
  const correctAnswer = String(prograssion[indexOfMissingNumber]);
  prograssion[indexOfMissingNumber] = '..';
  const question = prograssion.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  game(rules, getQuestionAndAnswer);
};

export default startGame;
