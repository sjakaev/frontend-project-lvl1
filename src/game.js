import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function isEven(num) {
  return num % 2 === 0;
}

function isTrueAnswer(str) {
  return str.toLowerCase() === 'yes';
}

function isCorrectAnswer(str) {
  const correctTrueAnswer = 'yes';
  const correctFalseAnswer = 'no';

  if (str.toLowerCase() === correctTrueAnswer || str.toLowerCase() === correctFalseAnswer) {
    return true;
  }
  return false;
}

for (let i = 0; i < 3; i += 1) {
  const num = randomInteger(1, 100);
  const answer = isEven(num);
  let userAnswer = '';

  console.log(`Question: ${num}`);
  userAnswer = readlineSync.question();

  if (!isCorrectAnswer(userAnswer)) {
    console.log(`"${userAnswer}" is wrong answer ;(`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  if (isTrueAnswer(userAnswer) === answer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
