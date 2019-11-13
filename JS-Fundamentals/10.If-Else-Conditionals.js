/*If-Else 
Condtion statments checks whether th condtion is true and then executes the code

2.Comparission Operators
a.>
b.<
c.>=
d.<=
e.==         implicit type conversion happens and datatypes won't matter
f.===        strict not equal to checks for datatype also
g.!=
h.!==
*/

let a = 1;
let b = 2;

if (a > b) {
  console.log("a > b");
} else {
  console.log("a < b");
}

let x = 1;
let y = "1"; //implicit type conversion
if (x === y) {
  console.log("x == y");
} else if (x == y) {
  console.log("x == y");
}
