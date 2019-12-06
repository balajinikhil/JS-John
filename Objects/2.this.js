/*this
this keyword points to the object in which it is called  
It points to method's object which is calling it
*/

let obj = {
  firstName: "Thomas",
  lastname: "Shelby",
  fullName: function() {
    console.log(`Hi I am ${this.firstName} ${this.lastname}`);
  }
};

obj.fullName();

/*If "this" keyword is declared outside the code block it points to the global winndow object */

console.log(`window :`, this);
window.firstName = "Window";
window.lastname = "Object";

console.log(`Outside codeblock :${this.firstName} ${this.lastname}`);
