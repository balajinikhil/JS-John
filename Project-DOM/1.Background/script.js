/*On button click */
let btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
  //   let random = Math.round(Math.random() * 255);
  //   let random1 = Math.round(Math.random() * 255);
  //   let random2 = Math.round(Math.random() * 255);
  //   console.log(`random :`, random, random1, random2);

  document.body.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
});

let rand = function() {
  return Math.round(Math.random() * 255);
};
console.log(rand());

/*On refresh */
let bd = document.querySelector("body");
bd.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
