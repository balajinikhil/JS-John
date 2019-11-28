/*innerHTML => gives html content inside an element
.textContent => gives text content inside the element*/

let ul = document.querySelector(".list");
let div1 = document.getElementById("first");
let div2 = document.getElementById("second");

console.log(`.innerHTML :`, ul.innerHTML);
console.log(`.textContent :`, ul.textContent);

//innerHTML creating
let ul2 = document.createElement("ul");
ul2.innerHTML = `<li>dynamically created </li> 
<li>innerHTML</li>`;
document.body.appendChild(ul2);

//textContent
let p = document.createElement("p");
p.textContent = "I am textContent";
div1.insertBefore(p, ul);
