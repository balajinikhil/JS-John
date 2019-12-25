const btn = document.querySelector(".btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const place = document.querySelector("#location");
const pic = document.querySelector("img");

btn.addEventListener("click", getInfo);

function getInfo() {
  const url = `https://randomuser.me/api/`;
  const xml = new XMLHttpRequest();
  xml.open("GET", url, true);
  xml.onload = function() {
    if (this.status == 200) {
      getData(this.responseText);
    }
  };
  xml.onerror = function() {
    console.log(xml.statusText);
  };
  xml.send();
}

function getData(cb) {
  const data = JSON.parse(cb);

  let {
    name: { first, last },
    email: mail,
    phone: num,
    location: { city },
    picture: { large }
  } = data.results[0];

  name.innerHTML = `    ${first} ${last}`;

  email.innerHTML = `<p>${mail}</p>`;

  phone.innerHTML = `<p>${num}</p>`;

  place.innerHTML = `<p> ${city}</p>`;

  pic.src = large;
}
