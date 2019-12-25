const form = document.querySelector("form");
const ipt = document.querySelector(".ipt");
const holder = document.querySelector(".holder");
const reset = document.querySelector(".res");
class Git {
  constructor() {
    this.clientID = "d0b88b29bfc7f26ef9ac";
    this.clientSecret = "19d040b2a30f852fd532b3be33e0755ee569957f";
  }
  async loadData() {
    const url = `https://api.github.com/users/${ipt.value}?client_id='${this.clientID}'&client_secret='${this.clientSecret}'`;

    let res = await fetch(url);
    if (res.status == 404) {
      holder.innerHTML = "Enter a valid username";
      setTimeout(() => {
        holder.innerHTML = "";
      }, 5000);

      return;
    }

    let respond = await res.json();

    return respond;
  }
}

class Display {
  constructor() {}
  showData(d) {
    let { avatar_url: src, name, public_repos: repos, html_url } = d;
    holder.innerHTML += `<div class="container">
        <img src='${src}' alt='profile'>
        <h5 >Name:${name} </h4>
  <h5 >GitHub:<a href="${html_url}" target="_blank">Link</a> </h5>
        <h5 >Public Repositories: ${repos}</span></h5>
        
      </div> `;
  }
}

let ajax = new Git();
let disp = new Display();
form.addEventListener("submit", e => {
  e.preventDefault();
  ajax
    .loadData()
    .then(d => disp.showData(d))
    .catch(err => {
      console.log(err);
    });
  ipt.value = "";
});

reset.addEventListener("click", () => {
  holder.innerHTML = "";
});
