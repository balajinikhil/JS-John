/*Ternary Operations

Syntax condition ? (if it is true) : (if it is false)
*/

/*Unary => When it has one operand */
let x = "string";
console.log(typeof x);
//   operator  operand

/*Binary => When it has  two operand */
let y = 5 + 3;
//    1   2

/*Ternary Operator => It has 3 arguments 
1st is condition  2nd if it is true 3rd if it is false */
console.log(2 > 3 ? "true" : "false");
//operand     1      2          3

function compare(x, y) {
  console.log(x > y ? `${x} is greater` : `${y} is greater`);
}

compare(2, 5);
