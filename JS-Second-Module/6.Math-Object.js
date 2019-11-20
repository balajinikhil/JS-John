/*Math Object 
Built in global Math methods */

/*.floor() 
Round off the number to next lower whole number */
console.log(".floor() :", Math.floor(1.1254));

/*.ceil()
Round off the number to next highest whole number*/
console.log(`.ceil() :`, Math.ceil(1.1254));

/*.round()
Round off the number to nearest whole number */
console.log(`.round() :`, Math.round(4.5245));

/*.sqrt()
square root of the number */
console.log(`.sqrt() :`, Math.sqrt(4));

/*.min()
gives minimum number in the given values */
console.log(`.min() :`, Math.min(7, 5, 6, 8, 1));

/*.max()
gives maximum number in the given values */
console.log(`.max() :`, Math.max(7, 5, 6, 1, 3, 5));

/*.pow(number,power)
Power of a number */
console.log(`.pow() :`, Math.pow(10, 2));

/*PI
value of PI (22/7) */
console.log(".PI :", Math.PI);

/*.random()
gives random number between 0 and 1 */
console.log(".random() :", Math.random());
//To get b/w 1 to 10
console.log(`random() b/w 1 to 10 :`, Math.floor(Math.random() * 10));

/*generate random number beetween specifed values*/
function randomNumber(min, max) {
  return parseInt(Math.random() * min + (max - min));
}
console.log(`random number b/w specified limit :`, randomNumber(5, 10));
