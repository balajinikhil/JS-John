const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const ipt = document.querySelector("input");
const app = document.querySelector(".app");

form.addEventListener("submit", e => {
  e.preventDefault();
  giphy();
});

function displayUI(resp) {
  let db = JSON.parse(resp);
  console.log(db);

  let { data } = db;

  if (data.length == 0) {
    app.innerHTML = "No result";
  }
  data.forEach(e => {
    // console.log(e);

    app.innerHTML += `<img src=${e.images.downsized_medium.url}>`;
  });
}

function giphy() {
  app.innerHTML = "";
  const api = new XMLHttpRequest();

  let url = `https://api.giphy.com/v1/gifs/search?api_key=a6p1LDHkkq8KP5uCZLRzQ0hX4tkZJZHo&q=${ipt.value}&limit=25&offset=0&rating=G&lang=en`;

  api.open("GET", url, true);

  api.onload = () => {
    if (api.status == 200) {
      displayUI(api.responseText);
    } else {
      console.log(new Error());
    }
  };

  api.onerror = function() {
    console.log(`Something went wrong`);
  };

  api.send();
}
