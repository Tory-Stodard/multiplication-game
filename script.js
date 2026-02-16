let score;
let solution;

const playBtn = document.querySelector('.play-btn');
const scoreUI = document.querySelector('.score');
const problem = document.querySelector('.problem');
const playerAnswer = document.querySelector('.player-answer');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function () {
  if (playerAnswer.value == solution) {
    confetti();
    score++;
    scoreUI.textContent = 'Your Score: ' + score;
    playerAnswer.value = '';
    generateProblem();
  } else {
    problem.textContent = 'Game Over! Your score is ' + score;
    scoreUI.classList.add('hidden');
    playerAnswer.classList.add('hidden');
    submitBtn.classList.add('hidden');
    playBtn.classList.remove('hidden');
    playBtn.textContent = 'Play Again?';
  }
});

function playGame() {
  score = 0;
  scoreUI.textContent = 'Your Score: ' + score;
  playerAnswer.value = '';

  playBtn.classList.add('hidden');
  scoreUI.classList.remove('hidden');
  problem.classList.remove('hidden');
  playerAnswer.classList.remove('hidden');
  submitBtn.classList.remove('hidden');

  generateProblem();
}

function generateProblem() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  problem.textContent = num1 + ' * ' + num2;

  solution = num1 * num2;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 13);
}
