/*
childNodes => treats white spaces as text 
childern
firstChild  
lastChild
nextSibling
previousSibling*/

let ul = document.querySelector(".list");
console.log(ul);

console.log(`childNodes :`, ul.childNodes); //i.e whitespaces is considered as text

let childNodes = ul.childNodes;
childNodes[1].style.color = "red";

let children = ul.children;
console.log(`children :`, children); //i.e white spaces are not considered
children[1].style.background = "orange";

console.log(ul.firstChild); //white spaces are considered in first and last child
console.log(ul.lastChild);

/*Siblings 
Next consecutive element is known as siblings
nextSibling
previousSibling
Whitespaces are considered 
If we give next or previous sibling after last child it will return null
*/
let li = document.querySelector("li");
console.log(`1st li :`, li);
let siblings = li.nextSibling.nextSibling;
console.log(`nextSibling :`, siblings);

console.log(`previousSibling`, siblings.previousSibling.previousSibling);
