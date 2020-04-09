/*call
Calls a method inside constructor function
can pass repitative property in a method and then call it inside constructor function /instead of repetedly writing properties .
Dosen't add method which you are calling
MethodName.call(objName, parameters)
Function is called methods inside objects
 object in which the method has to be called must be specified*/

function method() {
  this.name = "Hello";
  this.info = "Why is OOP so confusing?";
}

function Obj() {
  method.call(this);
}
let obj1 = new Obj();
console.log(`Object1 :`, obj1);
console.log(Object.getPrototypeOf(obj1));

//ex2
function con() {
  console.log(` Hi ${this.name} how are you?`);
}

function Objx() {
  this.name = "John";
  con.call(this); //performs function inside
}

let objy = new Objx();
