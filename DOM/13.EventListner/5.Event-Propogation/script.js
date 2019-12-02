/*Event Propogation
1.Event Bubling  => clicked element first then bubbles up i.e default 
2.Event Firing =>first at root and then fires until it reaches target */

let container = document.querySelector(".container");
let list = document.querySelector(".list");
let li = document.querySelectorAll(".ele");
/*
//1.Event bubling
container.addEventListener("click", () => {
  console.log("You clicked div");
});
list.addEventListener("click", () => {
  console.log("you clicked ul");
});

li.forEach(e => {
  e.addEventListener("click", () => {
    console.log("you clicked li");
  });
});
*/

//2.Event firing
container.addEventListener(
  "click",
  () => {
    console.log("You clicked div");
  },
  true
);
list.addEventListener(
  "click",
  () => {
    console.log("you clicked ul");
  },
  true
);

li.forEach(e => {
  e.addEventListener("click", () => {
    console.log("you clicked li");
  });
}, true);
