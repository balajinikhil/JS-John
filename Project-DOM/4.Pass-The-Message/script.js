let btn = document.querySelector("#btn");
let input = document.querySelector(".inpt");
let opt = document.querySelector("#opt");

btn.addEventListener("click", sendMessage);

function sendMessage(e) {
  let val = input.value;
  let correct = val.trim();
  if (correct == "") {
    alert("enter valid message");
  } else {
    opt.innerHTML = val;
  }
}
