/*Rest Operator
same syntax as spread operator
Used in parameter of the function
REST function name(..para) 
SPREAD name(...args)*/

function add(num1, num2) {
  result = num1 + num2;
  console.log(arguments);
  // as args are stored in form of object we can't apply array methods

  return result;
}

console.log(`normal`, add(1, 2));

function sub(...args) {
  result = args.map(e => {
    console.log(e);

    return e - 1;
  });
  return result;
}
console.log(sub(1, 2, 3, 4));

/*by using REST operator in the parameter of a function we can apply array method to the arguments
REST should alawys be the last parameter
*/
