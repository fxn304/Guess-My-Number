let scoreStart = 20;
let highscoreStart = 0;

let score = document.querySelector('.score'); // score text
let highscore = document.querySelector('.highscore'); // highscore text
let guessingText = document.querySelector('.guessing-text'); // 'Start guessing..', '💥 You lost the game!', '🎉 Correct Number!', etc.
let correctNumber = document.querySelector('.correct-number'); // =>.. correct number...

document.getElementById('again-btn').disabled = true;

function getNumber() {
  let inputNumber = document.getElementById('guess-number').value;

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  function displayMessage(message) {
    document.querySelector('.guessing-text').textContent = message;
  }

  let randomNumber = generateRandomNumber();

  if (inputNumber === '') {
    displayMessage('Please insert your number!');
  } else if (inputNumber >= 21) {
    displayMessage('Please insert number between 1 and 20!');
  } else {
    correctNumber.textContent = randomNumber;
    if (scoreStart == 0) {
      // if score is 0 => lost game
      scoreStart--;
      displayMessage('💥 You lost the game!');
      document.body.style.backgroundColor = 'red';
      document.getElementById('check-btn').disabled = true;
      document.getElementById('again-btn').disabled = false;
    } else if (inputNumber == randomNumber) {
      // if the number was guessed win 1 point
      scoreStart++;
      score.textContent = scoreStart;
      displayMessage('🎉 Correct Number!');
      document.body.style.backgroundColor = 'green';
      if (scoreStart > highscoreStart) {
        highscoreStart = scoreStart;
        highscore.textContent = highscoreStart;
      }
    } else if (inputNumber !== randomNumber) {
      if (scoreStart > 0) {
        scoreStart--;
        displayMessage(
          inputNumber > randomNumber ? '📈 Too High!' : '📉 Too low!'
        );
        document.body.style.backgroundColor = '#ccc';
        score.textContent = scoreStart;
      }
    } else if (!scoreStart) {
      displayMessage('');
    }
  }
}

function againBtn() {
  scoreStart = 20;
  score.textContent = scoreStart;
  correctNumber.textContent = '?';
  document.body.style.backgroundColor = '#ccc';
  document.getElementById('check-btn').disabled = false; // turn on Check button
  document.getElementById('again-btn').disabled = true; // turn off Again button
  displayMessage('Start guessing..');
  document.getElementById('guess-number').value = ''; // clear input
}
