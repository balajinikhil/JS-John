/*Form
submit event listner
prevent default
how to add value */

let form = document.querySelector("#form");
let btn = document.querySelector("#submit");

form.addEventListener("submit", e => {
  e.preventDefault();
  let nme = document.querySelector("#name").value;
  let pwd = document.querySelector("#password").value;

  console.log(`Your name is ${nme} and password is ${pwd}`);
});
