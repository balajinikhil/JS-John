/*Key Events
1.keypress =>when key is pressed
2.keydown => when key is down
3.keyup => when key is released */

let txt = document.querySelector("#txt");

//1.keypress
txt.addEventListener("keypress", () => console.log("keypress"));

//2.keydown
txt.addEventListener("keydown", () => console.log("keydown"));

//3.keyup
txt.addEventListener("keyup", () => console.log(txt.value));
