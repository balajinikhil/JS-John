/* GOBAL SCOPE 
Any variable declared outside the code block is said to have GLOBAL SCOPE
That variable can be acessed anywhere in the program 
It is not good practice as reassignig may happen which can mess up the code*/

/*LOCAL SCOPE 
Any variable declared within the code block is said to have LOCAL SCOPE
That variable can be acessed only inside the code block
*/

let out = `I am global scope`;
function codeBlock() {
  let inside = `I am inside code block`;
  out = "can acess global in code block"; //reassign
  console.log(out);

  return inside;
}
//can't acess inside out of code block
console.log(out, codeBlock());

/*If there is a code block and another codeblock inside of it both will have seperate
local scope the inner local scope can acess values of outter one,
 but outter one can't acess the values of inner scope */

function contd() {
  let scp1 = `I am outer scope`;
  function contd1() {
    let scp2 = `I am inner scope`;
    console.log(scp1);
    gscp =
      "I am not declared in local scope"; /*since let keyword is not used,
    It is considered as reassign an JS searches for variable in all scopes, 
    if not found will be declared in global scope*/
  }
  contd1();
  //console.log(scp2); not defined
}
contd();
console.log(gscp);

/*JS will first search in variable's local scope, then the outter scope,
 if it's not available there ,it will search in global scope
 If the variable is unavialable in global scope then JS will declare that 
 variable in global scope  */
