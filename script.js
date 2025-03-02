let score = 0;
let startTime;
let timer;
const game = document.getElementById('game');
const money = document.getElementById('money');
const scoreDisplay = document.getElementById('score');
const replayButton = document.getElementById('replay');
const scoreList = document.getElementById('score-list');

function startGame() {
    score = 0;
    startTime = Date.now();
    moveMoney();
    timer = setInterval(updateTime, 10);
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    scoreDisplay.textContent = `Time: ${elapsedTime.toFixed(3)}s`;
}

function moveMoney() {
    const x = Math.floor(Math.random() * (game.clientWidth - money.clientWidth));
    const y = Math.floor(Math.random() * (game.clientHeight - money.clientHeight));
    money.style.left = `${x}px`;
    money.style.top = `${y}px`;
}

function endGame() {
    clearInterval(timer);
    const finalTime = (Date.now() - startTime) / 1000;
    alert(`Game over! Your time: ${finalTime.toFixed(3)}s`);
    const listItem = document.createElement('li');
    listItem.textContent = `Time: ${finalTime.toFixed(3)}s`;
    scoreList.appendChild(listItem);
}

money.addEventListener('click', () => {
    score++;
    if (score >= 30) {
        endGame();
        return;
    }
    moveMoney();
});

game.addEventListener('click', (event) => {
    if (event.target !== money) {
        const currentTime = Date.now();
        startTime -= 1000;
        const elapsedTime = (currentTime - startTime) / 1000;
        scoreDisplay.textContent = `Time: ${elapsedTime.toFixed(3)}s`;
    }
});

replayButton.addEventListener('click', () => {
    startGame();
});

startGame();
