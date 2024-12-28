const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameContainer = document.getElementById('game-container');

let score = 0;

// Function to move the ball to a random position
function moveBall() {
  const containerRect = gameContainer.getBoundingClientRect();
  const maxX = containerRect.width - ball.offsetWidth;
  const maxY = containerRect.height - ball.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;
}

// Event listener for when the ball is clicked
ball.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveBall();
});

// Initial ball position
moveBall();
