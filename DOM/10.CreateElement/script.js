/*
.createElement('tagName')
.createTextNode('string')
.appendChild('element') */

let div = document.querySelector(".con");

let anc = document.createElement("a");

let txt = document.createTextNode("Link");
anc.href = "#";

anc.appendChild(txt);

div.appendChild(anc);

let h = document.getElementById("text");

let p = document.createElement("p");

let para = document.createTextNode("I am a para dynamically added");

p.appendChild(para);

h.appendChild(p);

p.classList.add("show");

/*.insertBefore() => appendChild() adds the element at the end of existing elements
If we want to dynamically add element before exisiting ones we can use this
Takes 2 parameters 1.what we want to insert 
                   2.Before Which element we want to insert */
let p1 = document.createElement("p");
let txt1 = document.createTextNode("I am insertBefore");
p1.appendChild(txt1);
div.insertBefore(p1, h);
p1.classList.add("insert");

/*replaceChild() => To replace an existing element with new element
2 parameters 1.What we want to add 
             2.WHich element to replace  */
let h4 = document.querySelector(".try");
let replace = document.createElement("h4");
let txt2 = document.createTextNode("I am replaceChild");
replace.appendChild(txt2);

div.replaceChild(replace, h4);
