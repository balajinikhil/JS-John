let number = document.querySelector("h3");
let lower = document.querySelector("#lowerCount");
let add = document.querySelector("#addCount");
let counter = 0;
lower.addEventListener("click", lowerCount);
add.addEventListener("click", addCount);
function lowerCount(e) {
  counter -= 1;
  number.innerHTML = counter;
  checkcolor();
}

function addCount(e) {
  counter += 1;
  number.innerHTML = counter;
  checkcolor();
}
function checkcolor() {
  if (counter < 0) {
    number.style.color = "red";
  } else if (counter > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "white";
  }
}
