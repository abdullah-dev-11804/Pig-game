'use strict';
const img = document.querySelector('img');
let current = 0;
img.style.transition = 'all';
img.style.transitionDuration = '200';
let randomNumber = 0;

const rollBtn = document.querySelector('.btn--roll');
const addBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const playerScore = document.querySelector('#score--0');
playerScore.textContent = 0;
const playerScore2 = document.querySelector('#score--1');
playerScore2.textContent = 0;
const player1Component = document.querySelector('.player--0');
const player2Component = document.querySelector('.player--1');

function game() {
  const player1 = document.querySelector('#current--0');
  const player2 = document.querySelector('#current--1');

  rollBtn.addEventListener('click', randomNumber => {
    img.classList.remove('hidden');
    randomNumber = Math.floor(Math.random() * 6 + 1);
    img.src = `dice-${randomNumber}.png`;
    const playerWithScore = document.querySelector('.expClass');
    if (randomNumber == 1) {
      player1.textContent = 0;
      player2.textContent = 0;
      current = -1;
      switchPlayer();
    }
    current += randomNumber;
    playerWithScore.textContent = current;
  });
  function switchPlayer() {
    player1.classList.toggle('expClass');
    player1Component.classList.toggle('player--active');
    player2.classList.toggle('expClass');
    player2Component.classList.toggle('player--active');
  }
  addBtn.addEventListener('click', randomNumber => {
    const playerWithScore = document.querySelector('.expClass');
    current = 0;

    if (player2.classList.contains('expClass')) {
      playerScore2.textContent =
        Number(playerScore2.textContent) + Number(playerWithScore.textContent);
      if (Number(playerScore2.textContent) >= 100) {
        console.log('PLAYER 2 WINS ');
        resetGame();
      }
    } else {
      playerScore.textContent =
        Number(playerScore.textContent) + Number(playerWithScore.textContent);
      if (Number(playerScore.textContent) >= 100) {
        console.log('PLAYER 1 WINS ');
        resetGame();
      }
    }
    switchPlayer();
    playerWithScore.textContent = 0;
  });
  function resetGame() {
    playerScore.textContent = 0;
    playerScore2.textContent = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    img.classList.add('hidden');
  }
  newGame.addEventListener('click', resetGame);
}

game();
