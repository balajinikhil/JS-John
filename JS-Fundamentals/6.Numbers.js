let num = 1;
let num1 = 1.112;

/*1.Number Operations 
1.Add + 
2.Sub -
3.Mul * 
4.Div /
4.Modules %
*/

let add = num + num1;
let sub = num - num1;
let mul = num * num1;
let div = num / num1;

console.log(add, sub, mul, div);

let mod = 9 % 2; //gives remainder
console.log(mod);

//increment
let inc = 1;
inc++;
console.log(inc);

//decrement
let dec = 2;
dec--;
console.log(dec);

/*short hand 
i.e: it can be used to any math operator*/
let a = 1;
a = a + 1;
console.log(a);

let b = 1;
b += 1;
console.log(b);

//BODMAS
let x = 5 + 6 * 7;
let y = (5 + 6) * 7;
console.log(`x: `, x, "y :", y);
