/*Adding CSS dynamically */
let div = document.querySelector(".content");

/*Adding style
div.style.color = "green";
div.style.background = "pink";
div.style.display = "block"; //none to hide element
*/

/*Adding style in JS is not recomended we can write our required style in CSS
and give it a class name, we can add that class name using JS when we want to add that style */

div.classList.add("special");
