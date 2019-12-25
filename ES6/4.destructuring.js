/*Assignment destructuring
Binding a properties of a non-primitive datatype to a variable so we can acess those propertiesin global scope 
USED IN REACT
*/

let obj = {
  name: "hello",
  place: "world"
};
console.log(obj.name);
console.log(obj.place);

//instead               PROPERTIES NAME SHOULD MATCH
let { name, place } = obj;
console.log(`destructuring :`, name);
console.log(`destructuring :`, place);

//to use a new name
let { name: nme, place: plc } = obj;
console.log(`alias :`, nme);
console.log(`alias :`, plc);

//For Arrays
let arr = [1, 2, 3, 4, 5];
console.log(`normal :`, arr[0]);

var [one, two] = arr;
console.log(`destructuring :`, one); //assiging arr[0] to variable one

/*skip a value
2 is skipped*/
var [one, , three] = arr;
console.log(`skip value :`, three);

// reassign
var [one, two = 0] = arr;
console.log(`reassign :`, two);

//swap
var num = 1;
var num2 = 2;

var [num, num2] = [num2, num];
console.log(`swap :`, num, num2);

/*function  */
function hello() {
  return {
    hi: "hi",
    people: "people"
  };
}

let { hi, people } = hello();
console.log(`function :`, hi, people);
