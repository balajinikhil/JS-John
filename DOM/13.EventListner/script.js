/*Event Listner
Performs specified code when particular events happen */

let h3 = document.querySelector(".head");
let btn = document.querySelector(".btn");

btn.addEventListener("click", addStyle);

function addStyle() {
  h3.classList.add("special");
}
