/*className
classList 

*/

let head1 = document.getElementById("first");
let head2 = document.querySelector("#second");
let head3 = document.querySelector("#third");

console.log(head1.className);

head1.className = "text"; //replaces previous class names

console.log(head2.classList);

head2.classList.add("colors", "text");

head2.classList.remove("text");

head3.className = "colors";

console.log(head3.className);
