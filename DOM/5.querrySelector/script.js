/*.querySelector('css selector') */
/*.querySelectorAll('css selector')
Can select any element just like we select in CSS
Gives NodeList but we can use array methods no need of spread operator */

let tag = document.querySelector("h3");
tag.style.backgroundColor = "orange";

let cls = document.querySelector(".list");
cls.style.backgroundColor = "pink";

let id = document.querySelector("#g");
id.style.backgroundColor = "green";

let child = document.querySelector("li:first-child");
child.style.color = " white";

/*Can use array methods without spread operator */
let list = document.querySelectorAll(".special");
console.log(list);

list.forEach(ele => {
  ele.style.color = "red";
});

/*querrySelector => selects the 1st item it gets with matching reference
If we want to select multiple items we must use querrySelectorAll */
