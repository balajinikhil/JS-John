/*Old way 

function Employee(id) {
  this.id = id;
}
Employee.prototype.call = function() {
  console.log(`Hello my ID is ${this.id}`);
};
let john = new Employee(24);
console.log(john);
john.call();

function Manager(id, name, dept) {
  Employee.call(this, id);
  this.name = name;
  this.department = dept;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.meet = function() {
  console.log(`I'm calling meeting`);
};
let bob = new Manager(46, "Bob", "Sales");
console.log(bob);
bob.meet();
bob.call();
*/

/*ES6 way*/

class Employee {
  constructor(id) {
    this.id = id;
  }
  call() {
    console.log(`My id is ${this.id}`);
  }
}

let john = new Employee(24);
console.log(john);
john.call();

class Manager extends Employee {
  constructor(id, name, dept) {
    super(id);
    this.name = name;
    this.department = dept;
  }
  meet() {
    console.log(`I'm calling a meeting`);
  }
}

let bob = new Manager(46, "Bob", "sales");
console.log(bob);
bob.meet();
bob.call();
