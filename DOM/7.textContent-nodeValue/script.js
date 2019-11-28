/*
   To select text of selected element
   nodeValue
   textContent
   */
let id = document.getElementById("special");
console.log(id);

//   let no = id.nodeValue;
//   console.log(no);

console.log(id.childNodes);

let value = id.firstChild.nodeValue;
console.log(`nodeValue :`, value);

//let textContent =
id.textContent = "WTF";
console.log(`textContent :`, textContent);

//
