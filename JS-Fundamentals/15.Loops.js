/*Loops 
To run a block of code repetedly while certain condition is true
*/

//1.While

let x = 5;

while (x > 0) {
  console.log("WHILE: The number is " + x);
  x--;
}

/*Do While => same as while but it executes code once before checking condition
 */

let y = 5;
do {
  console.log("DO-WHILE : The number is " + y);
  y--;
} while (y > 0);

/*for loop
for(intializtion ; condition ; itteratio) */

for (let i = 1; i < 5; i++) {
  console.log("FOR : The number is : " + i);
}
