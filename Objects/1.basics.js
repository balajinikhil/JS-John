/*Objects are collection of key value pairs 
objects property accepts any data type as its value
if property value is function its called methods */

let obj = {
  name: "Thomas",
  age: 27,
  married: true,
  children: ["charles", "ruby"],
  //bracket-notation as JS won't allow to add property
  ["last-name"]: "Shelby",
  order: function() {
    return "By the order of Peaky fooking Blinders";
  }
};

console.log(obj);

/*dot-notation
can be used to acess/add/delete a property
. => is called element acess operator*/

//acess property
console.log("acess :", obj.name);
//acess array elements
console.log(`array :`, obj.children[1]);

//add property
obj.brothers = ["John", "Arthur"];
console.log(`add :`, obj.brothers);

/*bracket-notation
It is used when JS dosen't allow to add property and it does all the things that dot-notation can do */
console.log(
  `dot-notation :`,
  obj.married,
  `bracket-notation :`,
  obj["married"]
);

//delete a property
delete obj.married;
console.log(`delete :`, obj);

//loop through obj
for (let key in obj) {
  console.log(`property-${key}: value-${obj[key]}`);
}

//check if property exists
let check = "married" in obj; //returns boolean
console.log(`check if property exists :`, check);

/*If a property dosen't exist inside a Object JS returns
undefined */

/*method function inside a object is called as method it can be invoked by obj.propertyName() */

console.log(`Method() :`, obj.order());
