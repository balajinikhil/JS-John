const btn = document.querySelector(".btn");
const txt = document.querySelector(".joke");
const imgContainer = document.querySelector("img");

function sendData(url) {
  const xml = new XMLHttpRequest();
  xml.open("GET", url, true);

  xml.onload = function() {
    if (xml.status == 200) {
      const data = JSON.parse(xml.responseText);
      let { icon_url: img, value } = data;
      // image
      imgContainer.src = img;
      //   joke
      txt.innerHTML = `<h3> ${value}</h3>`;
    } else {
      console.log("error");
    }
  };

  xml.onerror = function() {
    console.log("something went wrong");
  };
  xml.send();
}

btn.addEventListener("click", function() {
  sendData("https://api.chucknorris.io/jokes/random");
});
