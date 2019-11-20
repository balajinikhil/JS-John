/* Array => List of values, zero index based
Object => Collection of values which have properties */

let arr = ["john", "pepper", "bob", "taylor"];

let arr1 = new Array("hello", "world");

let obj = { firstName: "john", lastName: "pepper" };

console.log("primitive array :", arr);
console.log("non-primitive array :", arr1);
console.log("object :", obj.firstName);

/*Array Object */

let frnds = ["chandler", "monica", "rachel", "ross", "joey", "pheobe"];

/*.length 
length of array values*/
console.log(".lenght :", frnds.length);
console.log("last value of array :", frnds[frnds.length - 1]);

/*.reverse()
reverses the array values*/
console.log(".reverse() :", frnds.reverse());

/*.concat() 
adding two more arrays to form another array*/
let num = [8, 2, 7, 5];
console.log(".concat() :", frnds.concat(num, 6, "numbers"));

/*unshift() 
adding values at zero index of array*/
frnds.unshift("Friends");
console.log(".unshift() :", frnds);

/*shift()
removing value from zero index of array */
frnds.shift();
console.log("shift() :", frnds);

/*push()
adding values at end of the array*/
frnds.push(1);
console.log(`push() :`, frnds);

/*pop()
removing values from end of the array */
frnds.pop();
console.log(`pop() :`, frnds);

/*splice()
deleting values inside array splice(start-index,length)
it deletes the value*/
console.log(`splice() :`, frnds.splice(0, 2));
console.log("after splice() :", frnds);

/*sort() 
arrange the values in ascending order*/
console.log(`sort() numbers :`, num.sort());
console.log(`sort() :`, frnds.sort());

/*.join()
converts array value to string */
console.log(`.join() :`, frnds.join(" "));

/*.slice()
extract values from array ,it copies values  */
console.log(".slice() :", frnds.slice(0, 2));

/*.forEach()
Executes provided function once for each element*/
num.forEach(function(ele, i, ar) {
  console.log(`ele`, ele);
  console.log(`index`, i);
  console.log("array", ar);
});

/*Array ForLoops
Itterating through array using for loop
since length dosen't count from zero*/

let a = ["batman", "superman", "wonder woman", "cyborg", "aquaman"];

for (let i = 0; i < a.length; i++) {
  console.log("Justice League member ", a[i], " number  ", i + 1);
}

for (let i = a.length - 1; i >= 0; i--) {
  console.log("JL member :", a[i], " no. ", i + 1);
}
