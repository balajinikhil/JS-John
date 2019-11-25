/* 
1 inch = 2.54cm
1 foot = 12 inch */
function tocm(foot, inch) {
  if (foot < 0 || inch < 0) {
    alert("Invalid Parameters");
    return;
  } else {
    let cm = foot * 12 * 2.54;
    cm += inch * 2.54;
    cm.toFixed(2);
    console.log(`${foot} foot and ${inch} inch is ${cm} in cm`);
    return cm;
  }
}
tocm(12, 2);
tocm(10, 0);
