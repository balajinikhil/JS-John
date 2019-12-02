let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let cont = document.querySelector(".container");
let btn = document.querySelector(".btn");
let val = document.querySelector(".value");

/* //Own Try
btn.addEventListener("click", () => {
  let hex = "";
  for (let i = 0; i < 6; i++) {
    hex += arr[random()];
  }
  document.body.style.backgroundColor = `#${hex}`;
  val.textContent = `#${hex}`;
});

function random() {
  return Math.round(Math.random() * (arr.length - 1));
}
*/

//Tutorial
btn.addEventListener("click", johnWay);

function johnWay() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * arr.length);
    hex += arr[num];
  }
  document.body.style.backgroundColor = hex;
  val.textContent = hex;
}
