let clock = document.querySelector("#clock");

function tellTime() {
  let date = new Date();
  let hours = date.getHours(); //0-23
  let minutes = date.getMinutes(); //0-59
  let seconds = date.getSeconds(); //0-59
  let amOrpm = "";
  let meridian = function() {
    if (hours > 12) {
      hours -= 12;
      amOrpm = "PM";
    } else if (hours == 0) {
      hours = 12;
      amOrpm = "AM";
    } else {
      amOrpm = "AM";
    }
  };
  meridian();

  function addZero(val) {
    if (val < 10) {
      val = `0${val}`;
    }
    return val;
  }
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}  ${amOrpm}`;
}

setInterval(tellTime, 1000);
