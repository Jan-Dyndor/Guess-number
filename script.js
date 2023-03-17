'use strict';

//! Refactoring code +  FUNCTIONS

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (scr) {
  document.querySelector('.score').textContent = scr;
};

const changeBackgorundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayHighscore = function (Highsrc) {
  document.querySelector('.highscore').textContent = Highsrc;
};

const numberStyle = function (style) {
  document.querySelector('.number').style.width = style;
};
//! Definig seacret number and score

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

//! Variable for heighscore
let heighscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('No number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    changeBackgorundColor('#60b347');
    numberStyle('30rem');
    document.querySelector('.number').textContent = secretNumber;
    //! Implementing heighscore
    if (score > heighscore) {
      heighscore = score;
      displayHighscore(heighscore);
    }
  }
  //when user guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To high' : 'To low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore(0);
    }
  }
});

//! AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);

  // one more creating random number
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //return to basic messages display
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  //change in CSS
  changeBackgorundColor('#222');
  numberStyle('15rem');
  //cleaning input
  document.querySelector('.guess').value = '';
});
