let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess'); // guess input要素を取得
const mainImage = document.getElementById('main-image'); // 画像要素を取得

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('数字を入れて？');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('正解です！');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#E1A1B9';
    mainImage.src = 'img/img2.jpg';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    // Checkボタンを非表示にし、Againボタンを表示する
    checkButton.style.display = 'none';
    againButton.style.display = 'flex';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      let guessEx = Math.abs(guess - secretNumber);
      displayMessage(
        guessEx >= 4
          ? guess > secretNumber
            ? '大きすぎるよ'
            : '小さすぎるよ'
          : guess > secretNumber
          ? '少し大きいよ'
          : '少し小さいよ'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('私の勝ちね');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('数字を入れて？');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '1';

  document.querySelector('body').style.backgroundColor = '#fff';

  mainImage.src = 'img/img1.jpg';
  // Againボタンを非表示にし、Checkボタンを表示する
  checkButton.style.display = 'block';
  againButton.style.display = 'none';
});
