const guessBtn = document.getElementById("guessBtn");
const restart = document.getElementById("restart");

guessBtn.addEventListener("click", () => checkGuess());
restart.addEventListener("click", () => restartGame());

// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;
let chances = 3;
let gameOver = false;

function checkGuess() {
  if (gameOver) {
    return;
  }
  const guess = parseInt(document.getElementById("guess").value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Please enter a valid number between 1 and 10.");
    return;
  }

  chances--;

  if (guess === secretNumber) {
    document.getElementById("result").innerText = "Congratulations! You Win!";
    gameOver = true;

    if (gameOver) {
      document.getElementById("guess").setAttribute("disabled", "true");
      document.getElementById("guessBtn").setAttribute("disabled", "true");
    }
  } else if (guess < secretNumber) {
    document.getElementById("result").innerText = "Try a higher number.";
  } else {
    document.getElementById("result").innerText = "Try a lower number.";
  }

  document.getElementById("chances").innerText = chances;

  if (chances === 0 && guess !== secretNumber) {
    document.getElementById(
      "result"
    ).innerText = `Sorry, you lost. The correct number was ${secretNumber}.`;
    document.getElementById("result").classList.replace("success", "failer");
    gameOver = true;
    if (gameOver) {
      document.getElementById("guess").setAttribute("disabled", "true");
      document.getElementById("guessBtn").setAttribute("disabled", "true");
    }
  }

  const lastNum = document.querySelector("#lastNum");
  lastNum.classList.remove("hidden");

  let guessValue = document.getElementById("guess").value;
  const lastNumSpan = document.querySelector("#lastNum span");
  lastNumSpan.innerText = `${guessValue}`;
  document.getElementById("guess").value = "";
}

function restartGame() {
  // secretNumber = Math.floor(Math.random() * 10) + 1;
  // chances = 3;
  // gameOver = false;
  // document.getElementById("guess").value = "";
  // document.getElementById("chances").innerText = chances;
  // document.getElementById("result").innerText = "";
  // document.getElementById("guess").removeAttribute("disabled");
  // document.getElementById("guessBtn").removeAttribute("disabled");

  location.reload();
}
