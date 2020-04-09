class UI {
  constructor() {
    this.container = document.querySelector(".container");
  }
  showData = cb => {
    this.container.innerHTML = "";
    let data = JSON.parse(cb);
    if (data.length == 0) {
      this.container.innerHTML = "No result";
    } else {
      data.forEach((e, i) => {
        {
          this.container.innerHTML += `<div id="logo ${i}">
        <h5>Name :${e.name}</h5>
        <h5>Domain :${e.domain}</h5>
        
        <h6>logo:</h6>  
          <img src="${e.logo}" alt="loading.." />
        
      </div>`;
        }
      });
    }
  };
}

class Data {
  constructor() {
    this.ipt = document.querySelector(".ipt");
    this.btn = document.querySelector(".btn");
  }
  loadData = function() {
    const url = `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${this.ipt.value}`;

    const ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);

    ajax.onload = () => {
      if (ajax.status == 200) {
        disp.showData(ajax.responseText);
      } else if (ajax.status == 404) {
        console.log("Something Went Wrong");
      }
    };

    ajax.onerror = () => {
      console.log(ajax.statusText);
      console.log("Something went wrong");
    };

    ajax.send();
  };
}

let load = new Data();
let disp = new UI();
load.btn.addEventListener("click", e => {
  e.preventDefault();
  load.loadData();
});
