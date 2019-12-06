/*Constructor Function
A function which creates a new object by passing values as a parameter
*/
//Pascal Casing

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.call = function() {
    return `hello I am ${this.name} I'm ${this.age} years old`;
  };
}

let john = new Person("John", 20);

console.log(john);
console.log(john.call());

/*new keyword
1.Creates a empty object 
2.Sets "this" to point to back to the object
3.Ommits the use of return*/

/*Both factory and constructor functions are used to create multiple objects with same properties and methods */
