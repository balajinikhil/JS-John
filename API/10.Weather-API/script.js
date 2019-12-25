const btn = document.querySelector(".btn");
const ipt = document.querySelector(".ipt");
const form = document.querySelector("form");
const txt = document.querySelector(".txt");

form.addEventListener("submit", submitData);

function submitData(e) {
  e.preventDefault();
  //   console.log(ipt.value);
  api
    .getData()
    .then(d => {
      showData(d);
    })
    .catch(err => {
      console.log(err);

      txt.innerHTML = `<h1>Something Went Wrong</h1> `;
    });
}

class weatherAPI {
  constructor() {
    this.apikey = "543e03b9ff3a724d964ddb7e0868ef9f";
  }
  async getData() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ipt.value}&APPID=${this.apikey}&units=metric`;

    let res = await fetch(url).then(d => d.json());
    return res;
  }
}

let api = new weatherAPI();

function showData(data) {
  let {
    name,
    main,
    weather,
    sys: { country }
  } = data;

  txt.innerHTML = `<h4>${name}</h4>
  <h4>${country}</h4>
<img src = 'http://openweathermap.org/img/w/${weather[0].icon}.png'>
<p>Temperatur: ${main.temp} deg C<br>
Humidity:${main.humidity}%
</p>  `;
}
