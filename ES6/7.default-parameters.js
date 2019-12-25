/*Default Parameter
We can give value to a property in parameters in constructor function however if we want to override it we can*/

function List(nme, age, company = "Peaky Blinders") {
  this.name = nme;
  this.age = age;
  this.company = company;
}

let john = new List("John", "27");
let thomas = new List("Thomas", 32);
let michael = new List("Michael", 20, "new");

console.log(john);
console.log(thomas);
console.log(michael);
