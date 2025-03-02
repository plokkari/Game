let score = 0;
let time = 0;
let timer;
const game = document.getElementById('game');
const money = document.getElementById('money');
const scoreDisplay = document.getElementById('score');

function startGame() {
    moveMoney();
    timer = setInterval(updateTime, 1000);
}

function updateTime() {
    time++;
    scoreDisplay.textContent = `Time: ${time}s`;
}

function moveMoney() {
    const x = Math.floor(Math.random() * (game.clientWidth - money.clientWidth));
    const y = Math.floor(Math.random() * (game.clientHeight - money.clientHeight));
    money.style.left = `${x}px`;
    money.style.top = `${y}px`;
}

money.addEventListener('click', () => {
    score++;
    if (score >= 30) {
        clearInterval(timer);
        alert(`Game over! Your time: ${time}s`);
        return;
    }
    moveMoney();
});

game.addEventListener('click', (event) => {
    if (event.target !== money) {
        time++;
        scoreDisplay.textContent = `Time: ${time}s`;
    }
});

startGame();
