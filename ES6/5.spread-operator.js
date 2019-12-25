/*Spread Operator
Converts an array to list of items */

let arr = [1, 2, 3, 4, 5];
let arr1 = arr;
arr[1] = 7;
console.log(`array :`, arr);
console.log(`reference :`, arr1);

/*When an array is assigned to a new variable only the reference of original array will be stored, So changes in the new variable will alter the original array values   */

let arr2 = [...arr];
arr2[4] = 9;
console.log(`spread :`, arr2);

/* If we use spread operator we will  obtain the array values as a list of items so changes in the new variable will not affect the original array as values will be copied not the reference of the array */

let sel = document.getElementsByTagName("li");
console.log(`nodeList :`, sel);

[...sel].forEach(e => {
  e.style.color = "brown";
});

/*nodeList cannot accept array methods,
By converting nodeList into array using spread operator we can use array methods on elements

*/

/*spread operator as an argument
 */
arr = [1, 2, 3];
function add(num1, num2, num3) {
  result = num1 + num2 + num3;
  return result;
}

console.log(`function :`, add(...arr));

/*string to array using spread operator */
let letters = "abcdefgh";
let arr6 = [...letters];
console.log(`string to array :`, arr6);
