function name() {
  return "I am a function ";
}
console.log(`function() :`, name());

/*arrow function syntax
if there is only 1 return */
let foo = () => `arrow function`;
console.log(foo());

/*If there is more than just 1 return */
let poo = () => {
  console.log("I am 1st line");
  console.log("I am 2nd line");
};
poo();

/*lexical scoping
in arrow function 'this' points to containing scope
*/

let obj = {
  nme: "hello",
  place: "world",
  greet: function() {
    setTimeout(() => {
      console.log(`${this.nme} and ${this.place}`);
    }, 3000);
  }
};
obj.greet();
console.log(`lexical scope :`);
