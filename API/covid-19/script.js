const date = document.querySelector(".lastUpdate");
const btn = document.querySelector(".btn");
// India data
const newConfirmedInd = document.querySelector(".newConfirmedInd");
const totalConfirmedInd = document.querySelector(".totalConfirmedInd");
const newDeathsInd = document.querySelector(".newDeathsInd");
const totalDeathsInd = document.querySelector(".totalDeathsInd");
const newRecoveredInd = document.querySelector(".newRecoveredInd");
const totalRecoveredInd = document.querySelector(".totalRecoveredInd");

// World data
const newConfirmed = document.querySelector(".newConfirmed");
const totalConfirmed = document.querySelector(".totalConfirmed");
const newDeaths = document.querySelector(".newDeaths");
const totalDeaths = document.querySelector(".totalDeaths");
const newRecovered = document.querySelector(".newRecovered");
const totalRecovered = document.querySelector(".totalRecovered");

function nC(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const updateData = (ind, wrld, dateUp) => {
  date.innerHTML = `${new Date(dateUp).toUTCString()}`;
  newConfirmedInd.innerHTML = `${nC(ind.NewConfirmed)}+`;
  totalConfirmedInd.innerHTML = `${nC(ind.TotalConfirmed)}`;
  newDeathsInd.innerHTML = `${nC(ind.NewDeaths)}+`;
  totalDeathsInd.innerHTML = `${nC(ind.TotalDeaths)}`;
  newRecoveredInd.innerHTML = `${nC(ind.NewRecovered)}+`;
  totalRecoveredInd.innerHTML = `${nC(ind.TotalRecovered)}`;

  newConfirmed.innerHTML = `${nC(wrld.NewConfirmed)}+`;
  totalConfirmed.innerHTML = `${nC(wrld.TotalConfirmed)}`;
  newDeaths.innerHTML = `${nC(wrld.NewDeaths)}+`;
  totalDeaths.innerHTML = `${nC(wrld.TotalDeaths)}`;
  newRecovered.innerHTML = `${nC(wrld.NewRecovered)}+`;
  totalRecovered.innerHTML = `${nC(wrld.TotalRecovered)}`;
};

const getData = async () => {
  try {
    const dt = await fetch("https://api.covid19api.com/summary");
    console.log(dt);
    const data = await dt.json();
    console.log(data);
    const countries = await data.Countries;
    updateData(countries[101], data.Global, data.Date);
  } catch (err) {
    date.innerHTML = `Server Busy Try After Some Time`;
    alert("Server busy try again");
  }
};

btn.addEventListener("click", () => {
  alert("Go Corona Go");
  getData();
});

getData();
