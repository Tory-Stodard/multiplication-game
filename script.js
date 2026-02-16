let score;
let solution;

const playBtn = document.querySelector('.play-btn');
const highScoreUI = document.querySelector('.high-score');
const scoreUI = document.querySelector('.score');
const problem = document.querySelector('.problem');
const newHighScorePrompt = document.querySelector('.new-high-score-prompt');
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
    if (score == 1) {
      problem.textContent = 'Game Over 😭 You scored ' + score + ' point';
    } else {
      problem.textContent = 'Game Over 😭 You scored ' + score + ' points';
    }

    scoreUI.classList.add('hidden');
    playerAnswer.classList.add('hidden');
    submitBtn.classList.add('hidden');
    highScoreUI.classList.remove('hidden');
    playBtn.classList.remove('hidden');
    playBtn.textContent = 'Play Again?';
    manageHighScore();
  }
});

function playGame() {
  score = 0;
  scoreUI.textContent = 'Your Score: ' + score;
  playerAnswer.value = '';

  playBtn.classList.add('hidden');
  newHighScorePrompt.classList.add('hidden');
  highScoreUI.classList.add('hidden');
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

function manageHighScore() {
  if (localStorage.getItem('highScore') === null) {
    localStorage.setItem('highScore', 0);
  } else if (score > localStorage.getItem('highScore')) {
    localStorage.setItem('highScore', score);
    newHighScorePrompt.classList.remove('hidden');
  }

  highScoreUI.textContent = 'High Score: ' + localStorage.getItem('highScore');
}

manageHighScore();
