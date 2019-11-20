let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

/*Date Object
JS has a global date object*/

let today = new Date();
console.log(`Today's date :`, today);

/*variableName.getMonth() =>To get month seperately from declared date i.e it is zero indexed 
variableName.getFullYear() => to getYear seperately from declared date
 variableName.getDate() =>to get date from declared date
 variableName.getDay() => to get day index number*/

console.log(".getMonth() :", today.getMonth());
console.log(".getYear() :", today.getFullYear());
console.log(".getDay() :", today.getDate());
console.log(".getMinutes() :", today.getMinutes());
console.log(".getSeconds() :", today.getSeconds());
console.log("getTime() :", today.getTime()); //EPOCH time

/*Since it is zero indexed it can be matched with array */
console.log(
  `getMonth :${month[today.getMonth()]} 'getDay :${days[today.getDay()]}`
);

/*We can also set required date 
format is 'Month/Day/Year'   */
let nwDay = new Date("5 / 7 / 1996");
console.log("Set Date is :", nwDay);

/*.setDate() .setMonth() .setYear() 
We can set date, year, month minute & seconds as per required*/
