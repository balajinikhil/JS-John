/*Mouse Events
1.click
2.mouseup
3.mousedown
4.mouseover =>hover over that element
5.mouseout =>hover out of object */

let btn = document.querySelector(".btn");
let h4 = document.querySelector(".head");

//1.click
btn.addEventListener("click", () => console.log("click"));

//2.mouseup
btn.addEventListener("mouseup", () => console.log("mouseup"));

//3.mousedown
btn.addEventListener("mousedown", () => console.log("mousedown"));

//4.mouseover
h4.addEventListener("mouseover", () => {
  h4.className = "special";
});

//5.mouseout
h4.addEventListener("mouseout", () => {
  h4.classList.remove("special");
});
