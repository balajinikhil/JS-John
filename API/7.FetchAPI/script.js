fetch("https://api.chucknorris.io/jokes/random")
  .then(d => {
    console.log(d);

    d.json().then(d => {
      console.log(d);

      document.querySelector(".write").innerHTML = `${d.value}`;
    });
  })
  .catch(e => {
    console.log(e);
  });

/*fetch API
  fetch() - Is a method present in global window it accepts a URL as parameter and returns a promise Object(i.e resolve and reject) which is used in .then() and .catch() methods  */
