/*getElementsByTagName('tag name') 
Can select multiple elements by selecting there tag name 
Style applied will be applicable for all the tags*/

let h3 = document.getElementsByTagName("h3");
h3[0].style.color = "red";

/*Node list they are array like object 
zero index based has length property 
We can't use array methods directly */

let list = document.getElementsByTagName("li");
console.log(list);
list[1].style.background = "green";

/*We can use array method after using spread operator */

let betterList = [...list];
console.log(betterList);

betterList.forEach(ele => {
  console.log(ele);
});
