const enemy = document.getElementById('enemy');
const score = document.getElementById('score');
scoreValue = score.innerHTML;

function hit() {
enemy.style.top = Math.random() * 350+"px";
enemy.style.left = Math.random() * 650+"px";
++scoreValue;
console.log(scoreValue);
score.innerHTML = scoreValue;
}

enemy.addEventListener("click", hit);
