/*JSON -JavaScript Object Notation
JSON is used to store and retrive data 

JSON.stringify - converts JS object to a sting in order to store it

JSON.parse - to retrive the data back, converts string to JS object

fileName.json
JSON-syntax
{
    "key": "value",
    "key2": {
        "innerKey":"value"
    },
    key3:[{"key":"value"}]
}

*/

const btn = document.querySelector(".btn");
const cartItems = document.querySelector(".cartItems");
const itemDetails = document.querySelector(".itemDetails");

function getData(url) {
  const xml = new XMLHttpRequest();

  xml.open("GET", url, true);
  xml.onload = function() {
    if (xml.status == 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);

      //cart items
      cartItems.innerHTML = `<h4> ${data.cartItems.name}</h4>
      ${data.cartItems.company} `;

      //   item details
      data.ItemDetails.forEach(e => {
        itemDetails.innerHTML += `<p> ${e.resturant} type: ${e.type} </p>`;
      });
    }
  };
  xml.send();
}
btn.addEventListener("click", function() {
  getData("info.json");
});
