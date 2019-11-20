/*String <=> Array Conversion
String can be converted to Array using .split()
and vice versa using .join()*/

let str = `I am String`;
console.log(`.split() :`, str.split(" "));
let arr = ["hey", 9, true, null, undefined];
console.log(`.join() :`, arr.join(" "));

/*Reverse a string */
function reverseString(str1) {
  arr1 = str1
    .split("")
    .reverse()
    .join("");
  console.log(arr1);
}
reverseString("what the facebook");

/*Find Longest Word */
function longestWord(str2) {
  let arr2 = str2.split(" ");
  console.log(arr2);

  let ans = " ";
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length > ans.length) {
      ans = arr2[i];
    }
  }
  console.log(`longestWord :`, ans);
}
longestWord("What the Facebook");
