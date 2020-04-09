const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const ipt = document.querySelector("input");
const app = document.querySelector(".app");
// let urlCode = ;

function dispData(d) {
  let { data } = d;

  if (data.length == 0) {
    app.innerHTML = "No result";
  }
  data.forEach(e => {
    // console.log(e);

    app.innerHTML += `<img src=${e.images.downsized_medium.url}>`;
  });
}

function getData() {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=a6p1LDHkkq8KP5uCZLRzQ0hX4tkZJZHo&q=${ipt.value}&limit=25&offset=0&rating=G&lang=en`
  )
    .then(d => d.json())
    .then(d => {
      dispData(d);
    });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log(ipt.value);
  app.innerHTML = "";

  getData();
});
