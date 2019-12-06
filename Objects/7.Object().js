/*Object
All objects in JS is inherited from a prototype of object constructor function */
function Obj() {
  this.name = "John";
  this.age = 20;
}

let john = new Obj();

console.log(john);
console.log(Object.getPrototypeOf(john));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(john)));

let obj1 = {};

console.log(`literal :`, Object.getPrototypeOf(obj1));

/*Array Example
Since array is an object it inherits prototype from OBJECT constructor */

let arr = [];
console.log(`array :`, arr);
console.log(`array :`, Object.getPrototypeOf(arr));
console.log(`array :`, arr.constructor);

/*Object.create()
We can also create an object using object.create() 
Creates a new object by adding existing object as new objects prototype*/

let obj2 = {
  call: function() {
    //gets added to prototype of obj2
    return `You called obj.create`;
  }
};

let o = Object.create(obj2);
console.log(o);
console.log(o.call());

let o1 = Object.create(obj2, { name: { value: "Sarah" } });
console.log(o1);
console.log(o1.call());
