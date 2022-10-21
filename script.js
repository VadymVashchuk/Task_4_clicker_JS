const enemy = document.getElementById('enemy');

function hit() {
enemy.style.top = Math.random() * 350+"px";
enemy.style.left = Math.random() * 650+"px";
}

enemy.addEventListener("click", hit);





