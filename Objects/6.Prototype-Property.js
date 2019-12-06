/*Prototype Property
Every constructor function/class has prototype property
and it is shared by every instance of constructor/class  */

function Student(name, sec, dept) {
  this.name = name;
  this.section = sec;
  this.department = dept;
}
Student.prototype.college = "EWIT";

let John = new Student("John", "A", "EEE");
let Bob = new Student("Bob", "B", "MEE");

console.log(John);
console.log(Bob);

/*check for prototype */
console.log(`obj.constructor.prototype :`, John.constructor.prototype);

console.log(`Object.getPrototypeOf() :`, Object.getPrototypeOf(Bob));
