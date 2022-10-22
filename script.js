const enemy = document.getElementById('enemy');
const start = document.getElementById('start');
const score = document.getElementById('score');
scoreValue = score.innerHTML;
const time = document.getElementById('time');
timeValue = time.innerHTML;
const modalWindow = document.querySelector('.modal-window');

function hit() {
  enemy.style.top = Math.random() * 350 + "px";
  enemy.style.left = Math.random() * 650 + "px";
  ++scoreValue;
  score.innerHTML = scoreValue;
}

enemy.addEventListener("click", hit);
start.addEventListener("click", function () {
  let timerVar = setInterval(function () {           //ЯК ЦЕ ТАК, ЩО В ЗНАЧЕНИИ ПЕРЕМЕННОЇ ОГОЛОШУЄТЬСЯ ФУНКЦІЯ???
    --timeValue;
    time.innerHTML = timeValue;
    if (timeValue === 0) {
      clearInterval(timerVar);              // ЗУПИНЯЄ ТАЙМЕР
      setTimeout(gameOver, 200);            // ЦЯ ШТУКА ТІЛЬКИ ДЛЯ ТОГО, ЩОБ НА ТАЙМЕРІ ПОЯВИВСЯ 0, А НЕ ЗУПИНЯЛОСЬ НА 1
    }
  }, 1000);
  setTimeout(closeWindow, 2000);            // закриваємо модальне вікно окремо, а не в сетІнтервал, це важно
});

function gameOver() {                     // ЦЯ ШТУКА ТІЛЬКИ ДЛЯ ТОГО, ЩОБ НА ТАЙМЕРІ ПОЯВИВСЯ 0, А НЕ ЗУПИНЯЛОСЬ НА 1
  alert('GAME OVER');
}

function closeWindow() {                     
  modalWindow.classList.add('modal-window-closed');          //ЦЕ ДЛЯ ЗАКРИВАННЯ МОДАЛЬНОГО ВІКНА ФУНКЦІЯ
}