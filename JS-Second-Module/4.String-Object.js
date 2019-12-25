/*String Object 
String has properties and methods which we can call to perform specific action*/

//string
let str = `hello`;
console.log(str);

//object
let obj = { firstName: "John", lastName: "pepper" };
console.log(obj.firstName);

//string object
let strobj = new String(`I am string object`);
console.log(strobj);

console.log("acessing string elements", str[1]);

/*.length
property which gives length of string character, 1 indexed
 */
let nme = `John Pepper`;
console.log(".length :", nme.length);

/*.toLowerCase() .toUpperCase()  methods(i.e functions)
which converts uppercase to lower and vice versa */
console.log(`.toLowerCase() :`, nme.toLowerCase());
console.log(`.toUpperCase() :`, nme.toUpperCase());

/*.charAt()
gives character at specified index, it is zero indexed */
console.log(".charAt() :", nme.charAt(1));
console.log(`charAt(.length-1) :`, nme.charAt(nme.length - 1)); //last char

/*.indexOf('')
gives position of the character specified in string
starts from begining and ends at first time it finds that char*/
console.log(`.indexOf('')`, nme.indexOf("n"));

/*.startsWith('') .endsWith('')
 Validating whether the string starts with char */
console.log(".startsWith() :", nme.startsWith("J"));
console.log(".startsWith() :", nme.toLowerCase().startsWith("j"));

console.log(`endsWith() :`, nme.endsWith("r"));
console.log(`endsWith() :`, nme.toUpperCase().endsWith("R"));

/*.slice() 
cuts the string to specified length */
console.log(".slice() :", nme.slice(0, 5));

/*.includes('')
checks whether the string includes the particular character */
console.log(".includes() :", nme.includes("oh")); //'J(oh)n'

/*.toString()
acess the value of string */
console.log(".toString() :", nme.toString());
console.log(".valueOf() :", typeof strobj.valueOf());

/*.split() 
splits the string and stores it as an array
We can mention at which char we want to split*/
console.log(".split() :", nme.split(""));

/*.substr() .substring()
cutting a part of string .substr(starting,length)
.substring(starting,end)*/
console.log(".substr() :", nme.substr(1, 4));
console.log(".substring() :", nme.substring(0, 4));

/*.concat()
concatinating strings to form a new string*/
console.log(".concat() :", nme.concat(" ", str));

/*String template
ES6 version  "",'' and `` is used ${can be used to concatinate string}*/
let firstName = `John`;
let lastName = "Pepper";
console.log(`Full name is ${firstName} ${lastName}`);

let moreInfo =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String";
console.log("To know more visit :", moreInfo);
