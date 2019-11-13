/*3.Logical Operators
&& (AND)=> If bot the conditions are true, output is true
||  (OR)=> If one of the condition is true, o/p os true
!  (NOT)=> It's like NOT gate, toggles output
 */

let x = 10;
let y = 10;
let z = 9;

if (x == y && y == z) {
  console.log("AND");
}

if (x == y || y == z) {
  console.log("OR");
}

//NOT operator
console.log(!x);
let p;
console.log(!p); //undefined is true
