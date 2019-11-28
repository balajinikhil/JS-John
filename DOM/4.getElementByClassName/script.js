/*getElementsByClassName('class') 
Can select multiple elements by entering there class name 
It's a node list which is array like object
index based has length property but no array methods will be available
*/

let title = document.getElementsByClassName("title");
title[0].style.color = "red";

let list = document.getElementsByClassName("shel");
list[2].style.background = "green";

/*Can use array properties after using spread operator */
let betterList = [...list];

betterList.forEach(ele => {
  ele.style.color = "blue";
});
