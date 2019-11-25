/*Object 
Everything in JS is either one of the six primitive datatype or object
 If property of object isfunction it's called method*/

//Object Literal

let obj = {
  firstName: "Thomas",
  lastName: "Shelby",
  age: 35
};
console.log(`Object Literal :`, obj);

//Construction Function
let obj1 = new Object();
obj1.firstName = "Michael";
console.log(`Constructor func :`, obj1);

//Add property
obj.married = true;
console.log(`Add prop :`, obj);

//Acess property

console.log(`Acess.prop :`, obj.lastName);
console.log(`Acess['prop'] :`, obj["age"]);

//Modify property
obj1.firstName = "Arthur";
console.log(`Modify prop :`, obj1);

//Assign value
let edu = obj.education;
console.log(`Assign value :`, edu); //property dosen't exists in object so it returns undefined

//check if exists
let check = "education" in obj;
console.log(`check using in :`, check);

//check with undefined
if (obj.education == undefined) {
  console.log(`education dosen't exists`);
}

//delete property
delete obj.age;
console.log(`delete prop :`, obj);

/*Create a property
Object can hold all datatypes 
A function can be passed inside an object i.e methods*/
let obj2 = {
  firstName: "John",
  lastName: "Shelby",
  married: true,
  who() {
    return "Peaky Blinders ";
  }
};

console.log(`calling method :`, obj2.who()); //functions are called methods if declared inside object

/*itterate through object
Itterating through objects 
key is properties and obj[key] are values
*/
for (let key in obj) {
  console.log(`property ${key} : value ${obj[key]}`);
}

/*Nested Object
Object holding another object as values*/
let obj3 = {
  firstobj: { name: "Poly", married: false },
  secondobj: { name: "Eva", married: false }
};

/*Object as a parameter 
Objects can be placed as parameter to a function 
The property matches no matter what order we give it in*/

function hello({ name, greet }) {
  return `${name} !!!! ${greet}`;
}

let s = hello({ greet: "Welcome", name: "JS" });
console.log(s);
