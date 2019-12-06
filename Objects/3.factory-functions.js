/*Factory Functions
Function returns an object
Creating an object by passing values of objects as parameters this allows to create multiple objects just by passing values, 
i.e Making changes will be easy as we need to change in functions
  */

function nameIs(firstName, agep) {
  return {
    name: firstName,
    age: agep
  };
}

/*Now in order to create object we only need to call function with values */

let john = nameIs("john", 23);
let bob = nameIs("bob", 25);

console.log(`Factory Functions :`, john);
console.log(`Factory Functions :`, bob);
