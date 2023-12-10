'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'YOU WON';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.digit').textContent = '19';
// document.querySelector('.score').textContent = '19';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let gameScore = Number(document.querySelector('.score').textContent);

let highscore = 0;

document.querySelector('.buttonCheck').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Input a number! 🔢';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';

    document.querySelector('.digit').textContent = randomNumber;

    document.querySelector('header').style.backgroundColor = '#60b347';
    document.querySelector('main').style.backgroundColor = '#60b347';
    document.querySelector('.digit').style.width = '140px';

    if (gameScore > highscore) {
      highscore = gameScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > randomNumber) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent = 'High! 📈';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.message').textContent = "You've Lost";
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent = 'Low! 📉';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.message').textContent = "You've Lost";
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.digit').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('header').style.backgroundColor = '#222222';
  document.querySelector('main').style.backgroundColor = '#222222';
  document.querySelector('.digit').style.width = '70px';
  document.querySelector('.message').textContent = 'Start guessing...';
});
