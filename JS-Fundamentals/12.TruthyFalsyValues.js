/*Truthy and Falsy Value
JS has 2 types of values it is truthy and falsy values, 
A value must be either truthy or falsy. 
Falsy =>There are '9' Falsy values rest are Truthy 
i.false
ii.NaN
iii.null
iv.undefined
v.''
vi.""
vii.``
viii.0
ix. -0
Rest of values in JS are truthy values*/

if (NaN) {
  console.log("falsy");
} else {
  console.log("NaN is falsy");
}

let x = false;
let y;
let z = "";
let l = "";
let m = ``;
let n = 0;
if (x) {
  console.log("falsy values can not acess this ");
} else {
  console.log("All are Falsy values");
}
