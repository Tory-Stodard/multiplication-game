function playGame() {
  const playBtn = document.querySelector('.play-btn');
  const scoreUI = document.querySelector('.score');
  const problem = document.querySelector('.problem');
  const playerAnswer = document.querySelector('.player-answer');
  const submitBtn = document.querySelector('.submit-btn');

  playBtn.classList.add('hidden');
  scoreUI.classList.remove('hidden');
  problem.classList.remove('hidden');
  playerAnswer.classList.remove('hidden');
  submitBtn.classList.remove('hidden');

  generateProblem();
}

function generateProblem() {
  console.log('1*1?');
}
