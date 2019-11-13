function tipCalculator(amt, tipPercent) {
  let percent = tipPercent / 100;

  let tipAmt = amt * percent;
  let totalAmt = amt + tipAmt;

  if (tipPercent < 5) {
    console.log("This is too low " + tipPercent, " % tip ");
    console.log("Your tip Amount is : " + tipAmt);
    console.log("Your total amount is : " + totalAmt);
  } else if (tipPercent > 20) {
    console.log("This is very generous " + tipPercent, " % tip ");
    console.log("Your tip Amount is : " + tipAmt);
    console.log("Your total amount is : " + totalAmt);
  } else {
    console.log("This is good tip " + tipPercent, " % tip ");
    console.log("Your tip Amount is : " + tipAmt);
    console.log("Your total amount is : " + totalAmt);
  }
}

tipCalculator(100, 15);
tipCalculator(25, 4);
tipCalculator(200, 300);
