/*Higher Order Functions 
All JS functions are higher order functions
A function which accepts another functions as argument or 
returns a function is know as Higher Order Function*/

/*Built-In Functions 
1. setTimeout(handler , time in milliseconds) => executes handler after specified time
2.setInterval(handler , time in milliseconds) => keeps executing handler for specifed time intervals
3.alert('')
4.prompt('')*/

setTimeout(function() {
  console.log(`I am setTimeout`);
}, 3000);

/* setInterval(() => {
   console.log("I am interval");
 }, 2000);*/

/*.filter() */
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = num.filter(function(singlenum) {
  return singlenum % 2 === 0;
});

console.log(".filter() :", res);
