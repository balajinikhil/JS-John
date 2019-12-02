/*localStorage => will be stored even if the window is closed 
SessionStorage => only present till images are up
Both work the same 
.setItem('key','value') to store the value 
.getItem('key') to retrive the value*/

localStorage.setItem("name", "Thomas Shelby");
localStorage.setItem("job", "soldier");
localStorage.setItem("married", "false");

let get = localStorage.getItem("name");
document.write(get);

let arr = ["John", "Thomas", "Arthur"];

localStorage.setItem("Shelby", JSON.stringify(arr));
let gt = JSON.parse(localStorage.getItem("Shelby"));
