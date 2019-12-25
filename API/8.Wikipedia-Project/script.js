const searchForm = document.querySelector("form");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const inpt = document.querySelector(".inpt");

searchForm.addEventListener("submit", e => {
  e.preventDefault();

  const url = `http://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=&list=search&srsearch=${inpt.value}`;

  fetch(url)
    .then(d => {
      return d.json();
    })
    .then(d => {
      console.log(d);
      inpt.value = "";
      d.query.search.forEach(e => {
        container.innerHTML += `<h3> ${e.title}</h3>
            <p>${e.snippet}</p>`;
      });
    })
    .catch(e => {
      console.log(e);
    });
});
