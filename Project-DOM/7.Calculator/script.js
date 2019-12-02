let screen = document.querySelector(".screen");
let btn = document.querySelectorAll(".btn");

let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

btn.forEach(function(e, i, arr) {
  e.addEventListener("click", function() {
    screen.value += e.textContent;
  });
});

equal.addEventListener("click", function() {
  if (screen.value.trim() === "") {
    screen.value = "Enter value";
  } else {
    let ans = eval(screen.value);
    screen.value = ans;
  }
});

clear.addEventListener("click", () => {
  screen.value = "";
});
