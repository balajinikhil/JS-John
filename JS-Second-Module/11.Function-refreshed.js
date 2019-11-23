/*Functions
create a block of code and execute the code whenever we need
can change behaviour of object (i.e methods) */

function nameOfFunction() {
  //code
}
//invoke
nameOfFunction();

/*Method
The built-in functions which will be called to change behaviour of the object 
i.e objName.method()        =>obj.toLowerCase()*/

//declaration calling function without assigning it to any variable

/*Function Experssion
When a function is assigned to a variable 
There will be no need to write function name in case of declaration however 
it is good practice to write what we are doing

When invoking function expression we write variableName() */

let expression = function() {
  //code
};

//invoke
expression();

/*Parameters and Arguments 
Parameters are inputs to the  function which will be used later in function code block
Argumments are value of parameters given while invoking the function*/
/*
function paraArgs(firstParameter, secondParameter) {
  //code
}
paraArgs(arg1, arg2);
// if we dont pass anyone of the arguments then it will be assigned to undefined
*/
/*Return Statment 
Returns a value from function*/
function ret() {
  //code
  return "I will return";
  //code below return will not run
}
//the value of return can be stored in a variable
let storeReturn = ret();
//console.log(storeReturn);  ==> storeReturn === I will return
