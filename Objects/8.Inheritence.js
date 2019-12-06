/*Inherietence 
Instead of creating same properties we can add repitative property to another object and add it to the prototype
*/
function Pro(name, dept) {
  this.name = name;
  this.depatment = dept;
}
Pro.prototype.college = "EWIT";
Pro.prototype.call = function() {
  return `${this.name} from ${this.depatment}`;
};

function Student(name, dept) {
  Pro.call(this, name, dept);
}
Student.prototype = Object.create(Pro.prototype);
Student.prototype.constructor = Student;
let john = new Student("John", "EEE");

console.log(john);
console.log(john.call());

function Teacher(name, dept) {
  Pro.call(this, name, dept);
}
Teacher.prototype = Object.create(Pro.prototype);
Teacher.prototype.constructor = Teacher;

let bob = new Teacher("Bob", "CS");
console.log(bob);
console.log(bob.call());
