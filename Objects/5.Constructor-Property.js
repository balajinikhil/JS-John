/*Constructor Property
All Objects in JS will have "construct" property which we can use to see the constructor function of that object  */
function PeakyBlinders(name, job) {
  this.name = name;
  this.job = job;
  this.call = function() {
    return `My name is ${this.name} I do ${this.job}`;
  };
}

let john = new PeakyBlinders("John", "Politician");
console.log(john.constructor);

/*built-in constructor 
arrays and functions are objects */

let arr = [];
console.log(arr.constructor);

let fun = function() {};
console.log(fun.constructor);

/*It can also be used to call constructor function */

let bob = new john.constructor("bob", "coding");
console.log(bob);
