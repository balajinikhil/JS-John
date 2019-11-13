/*Switch Cases 
Instead of writing many else if conditions we can use Switch
To check multiple values at once*/

let dice = 7;

switch (dice) {
  case 1:
    console.log("ONE");
    break; //to go out of switch or else rest of case will be considered true
  case 2:
    console.log("TWO");
    break;
  case 3:
    console.log("THREE");
    break;
  case 4:
    console.log("FOUR");
    break;
  case 5:
    console.log("FIVE");
    break;
  case 6:
    console.log("SIX");
    break;
  default:
    console.log(
      "INVALID VALUE!!!"
    ); /*break is not necesarry, 
     as this will only execute if all the cases are false*/
}

//Days Of Week

function daysOfWeek(day) {
  switch (day) {
    case "monday":
      console.log(1);
      break;
    case "tuesday":
      console.log(2);
      break;
    case "wednesday":
      console.log(3);
      break;
    case "thursday":
      console.log(4);
      break;
    case "friday":
      console.log(5);
      break;
    case "saturday":
      console.log(6);
      break;
    case "sunday":
      console.log(7);
      break;
    default:
      console.log("Enter valid day");
  }
}

daysOfWeek("monday");
daysOfWeek("sunday");
daysOfWeek("tuesday");
