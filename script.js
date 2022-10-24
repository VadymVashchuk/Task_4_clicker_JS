const enemy = document.getElementById('enemy');
const start = document.getElementById('start');
const score = document.getElementById('score');
scoreValue = score.innerHTML;
const time = document.getElementById('time');
timeValue = time.innerHTML;
const modalWindow = document.querySelector('.modal-window');
const gameOverWindow = document.querySelector('.game-over-window');
const finishScore = document.getElementById('players-end-score');
const playAgain = document.getElementById('play-again');
const gameRestart = document.getElementById('restart');
const field = document.getElementById('field');
const fieldStyle = getComputedStyle(field);
const fieldWidth = parseInt(fieldStyle.width);
const fieldHeight = parseInt(fieldStyle.height);

enemy.addEventListener("click", hit);
start.addEventListener("click", gameStartWithStartButton);
playAgain.addEventListener("click", function () {
  setTimeout(gameStartWithPlayAgainButton, 800);
});
gameRestart.addEventListener("click", gameOverReset);

function hit() {
  enemy.style.top = Math.random() * (fieldHeight - 50) + "px";
  enemy.style.left = Math.random() * (fieldWidth - 50) + "px";
  ++scoreValue;
  score.innerHTML = scoreValue;
  document.getElementById('coins-sound').play();
}

function gameStartWithStartButton() {
  setTimeout(gameStart, 800);
  setTimeout(closeWindow, 800);
}

function gameStart() {
  let timerVar = setInterval(function () {           //ЦІКАВО, ЩО В ЗНАЧЕНИИ ПЕРЕМЕННОЇ МОЖНА ОГОЛОСИТИ ФУНКЦІЮ
    --timeValue;
    time.innerHTML = timeValue;
    if (timeValue < 1) {
      clearInterval(timerVar);              // ЗУПИНЯЄ ТАЙМЕР
      setTimeout(gameOver, 200);            // ЦЯ ШТУКА ДЛЯ ТОГО, ЩОБ НА ТАЙМЕРІ ПОЯВИВСЯ 0, А НЕ ЗУПИНЯЛОСЬ НА 1
    }
  }, 1000);
}

function closeWindow() {
  modalWindow.classList.add('modal-window-closed');          //ЦЕ ДЛЯ ЗАКРИВАННЯ МОДАЛЬНОГО ВІКНА ФУНКЦІЯ
}

function gameOver() {
  gameOverWindow.classList.add('active');
  finishScore.innerHTML = scoreValue;
}

function gameStartWithPlayAgainButton() {
  gameOverWindow.classList.remove('active');
  reset();
  gameStart();
}

function reset() {
  scoreValue = 0;
  timeValue = 10;
  score.innerHTML = scoreValue;
  time.innerHTML = timeValue;
}

function gameOverReset() {
  gameOver();
  timeValue = 1;
}