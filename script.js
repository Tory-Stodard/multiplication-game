let solution;

const playBtn = document.querySelector('.play-btn');
const scoreUI = document.querySelector('.score');
const problem = document.querySelector('.problem');
const playerAnswer = document.querySelector('.player-answer');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', function () {
  if (playerAnswer.value == solution) {
    alert('Correct!');
  } else {
    alert('Incorrect!');
  }
});

function playGame() {
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
