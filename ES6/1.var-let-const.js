/*ES6 or ECMA 2015 update
1.var
They added 2 new ways to declare a variable
2.let
3.const */

/*var 
can update a variable using var keyword
not recomended to use */
//define
var hello = "hello";
console.log(`var :`, hello);

//update
hello = "ello";
console.log(`var :`, hello);

//redefine
var hello = "hello world";
console.log(`var :`, hello);

/*let
 once a variable is declared it can be updated but it can't be redfined using let keyword again */
// define
let hey = " hey";
console.log(`let :`, hey);

// update
hey = "hey oh";
console.log(`let :`, hey);

/* redfine
let hey = "error";
console.log(`let :`, hey);
*/

/*const
once const is declared it cannot be redined or updated however we can update values inside a non-primitive datatypes 

*/
// define
const world = "world";
console.log(`const :`, world);

// update
// world = "error";
console.log(`const :`, world);

/*redine
const world = "again error";
console.log(`const :`, world);
*/

const arr = [1, 2, 3];
arr.push(4);
console.log(`const arr:`, arr);

const obj = { name: "thomas" };
obj.age = 25;
console.log(`const obj:`, obj);

/*var is function scope
let & const is block scope */