/*Array Itterations
1.The methods which itterates over array i.e No need for loops
2.They accept callback function as arguments which can be called as seperate function or annonymous function
.forEach()
.filter()
.map()
.reduce() */

/*.forEach(function(element,index,aarray){

})  loops through the array 
Calls a callback function
*/

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < number.length; i++) {
  console.log(`for loop element :`, i);
  console.log(`for loop index :`, number.indexOf(i));
}
number.forEach(function(ele, index, array) {
  console.log("element :", ele);
  console.log(`index :`, index);
  //   console.log(array);
});

/*.filter(function(ele,i,arr){

    return (condition)
}) loops through the array 
calls a callback function
returns new array if the condition of callback is satisfied or else empty array is returned     */

let filterResult = number.filter(function(ele, i, arr) {
  return ele % 2 === 0;
});
console.log(`.filter(num) :`, filterResult);

let names = ["Tommy", "John", "Arthur", "Pol", "Ava"];
let result = names.filter(function(nm) {
  return nm;
});
console.log(`.filter(names) :`, result);

/*.map(function(ele,i,arr){

}) loops through the function
calls a callback function
returns new array 
changes value of array if insisted in callback function
*/

let mapResult = number.map(function(ele, i, arr) {
  return ele * 2;
});
console.log(".map() :", mapResult);

/*.reduce(function(acc,curr){

}) loops through the array
calls a callback function
returns new array or object
reduces the total value of array to single value
accepts 2 parameters
1.acc (accumilator) => total of all calculations
2.curr(current) => current value in array 
*/

let reduceResults = number.reduce(function(acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(`.reduce() :`, reduceResults);

/*Difference
    .filter() vs .map()
filter changes the lenght based on condition
map only changes array value
*/

/*Array Chaining 
Can add more than one itterator to an array*/

let fruits = ["orange", "apple", "bannana", "guava"];

let arrChain = fruits
  .filter(function(ele) {
    return ele == "orange";
  })
  .map(function(ele) {
    return (ele = `${ele} is for sale`);
  });

console.log(`Array chaining`, arrChain);
