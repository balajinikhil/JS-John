//selectors
let val = document.querySelector(".guessField");
let btn = document.querySelector(".btn");
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHi");

let num = Math.ceil(Math.random() * 100);
console.log(num);

let counter = 0;
if (counter == 1) {
  guesses.innerHTML = "Previous Guesses :";
}

//game click
function startGame() {
  counter++;

  let value = val.value;
  if (counter == 1) {
    guesses.innerHTML = "Previous Guesses :";
  }

  if (counter == 10) {
    guesses.innerHTML += ` ${value}`;
    lastResult.innerHTML = `Game Over`;
    lastResult.style.backgroundColor = "red";
    btn.disabled = true;
    val.disabled = true;
    resetGame();
  } else if (value > num) {
    guesses.innerHTML += ` ${value}`;
    lastResult.innerHTML = `Wrong `;
    lastResult.style.backgroundColor = "red";
    lowOrHigh.textContent = "It is too High";
  } else if (value == num) {
    guesses.innerHTML += ` ${value}`;
    lastResult.innerHTML = `You guessed it correct`;
    lastResult.style.backgroundColor = "green";
    btn.disabled = true;
    val.disabled = true;
    resetGame();
  } else {
    guesses.innerHTML += ` ${value}`;
    lastResult.innerHTML = `Wrong `;
    lastResult.style.backgroundColor = "red";
    lowOrHigh.textContent = "It is too Low";
  }
  val.value = " ";
  val.focus();
}

function resetGame() {
  let reset = document.createElement("button");
  reset.textContent = "Reset Game";
  document.body.appendChild(reset);
  reset.addEventListener("click", () => {
    guesses.innerHTML = ` `;
    lastResult.innerHTML = ` `;
    lastResult.style.backgroundColor = "white ";
    lowOrHigh.textContent = " ";
    counter = 0;
    val.value = " ";
    document.body.removeChild(reset);
    btn.disabled = false;
    val.disabled = false;
    num = Math.ceil(Math.random() * 100);
    console.log(num);
  });
}
btn.addEventListener("click", startGame);
