const nme = document.querySelector("#name");
const img = document.querySelector("#image");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const form = document.getElementById("formReq");
const validate = document.querySelector(".validate");
let editCount = 0;
// add items
form.addEventListener("submit", first);

function first(ele) {
  ele.preventDefault();
  nmeVal = nme.value;
  imgVal = img.value;
  if (nmeVal.length == 0 || imgVal.length == 0) {
    validate.classList.add("empty");
  } else {
    validate.classList.remove("empty");
    console.log(nmeVal, imgVal);

    postReq(nmeVal, imgVal);
    loadData(showData);
  }
}

//loading
document.addEventListener("DOMContentLoaded", loadData(showData));

//get
function loadData(cb) {
  const url = "https://5e005f441fb995001414060c.mockapi.io/Items";
  const ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);

  ajax.onload = function() {
    if (ajax.status == 200) {
      cb(this.responseText);
    } else {
      console.log(ajax.statusText);
    }
  };

  ajax.onerror = function() {
    console.log("Something Went Wrong");
  };
  ajax.send();
}

function showData(list) {
  const data = JSON.parse(list);

  let content = ``;
  data.forEach(e => {
    content += `<div class='item-container'>
    <img src="./media/${e.pic}.jpg" />
      <p class="name">${e.name}</p>
      <button type='button'class="item-btn" id="edi" data-id=${e.id}>Edit</button>
      <button class="item-btn" id="del" data-id=${e.id}>Delete</button>
      </div>`;
  });
  container.innerHTML = content;

  getIcons();
}

//post
function postReq(nmeVal, imgVal) {
  nme.value = "";
  img.value = "";
  let name = nmeVal;
  let image = imgVal;

  const url = "https://5e005f441fb995001414060c.mockapi.io/Items";
  const xml = new XMLHttpRequest();
  xml.open("POST", url, true);

  xml.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  xml.onload = () => {
    if (xml.status == 200) {
      console.log(xml.responseText);
      loadData(showData);
    }
  };
  xml.onerror = function() {
    console.log("something went wrong");
  };

  xml.send(`name=${name}&pic=${image}`);
}

//icon selection for edit and dele
function getIcons() {
  const editItem = document.querySelectorAll("#edi");
  const deleteItem = document.querySelectorAll("#del");

  deleteItem.forEach(e => {
    e.addEventListener("click", () => {
      let ide = e.dataset.id;
      console.log(e);

      console.log(ide);

      deleteMethod(ide);
    });
  });

  editItem.forEach(e => {
    e.addEventListener("click", () => {
      let parent = e.parentElement;
      let ide = e.dataset.id;
      let img = parent.querySelector("img").src;
      let nameEdi = parent.querySelector("p").innerText;
      container.removeChild(parent);
      editCount = ide;
      let imgEdi = img.slice(50, 52);
      console.log(parent, img, nameEdi, imgEdi, ide);
      editMethod(imgEdi, nameEdi);
    });
  });
}

//delete
function deleteMethod(ide) {
  const url = `https://5e005f441fb995001414060c.mockapi.io/Items/${ide}`;
  const xml = new XMLHttpRequest();
  xml.open("DELETE", url, true);

  xml.onload = () => {
    if (xml.status == 200) {
      loadData(showData);
    }
  };
  xml.onerror = function() {
    console.log("something went wrong");
  };

  xml.send();
}

//edit
function editMethod(imgEdi, nameEdi) {
  nme.value = nameEdi;
  img.value = imgEdi;
  btn.innerHTML = "Edit Item";
  form.removeEventListener("submit", first);
  form.addEventListener("submit", second);
}

function second(e) {
  e.preventDefault();
  nmeVal = nme.value;
  imgVal = img.value;
  if (nmeVal.length == 0 || imgVal.length == 0) {
    validate.classList.add("empty");
  } else {
    validate.classList.remove("empty");
    console.log(nmeVal, imgVal);

    putReq(nmeVal, imgVal);
  }
}

function putReq(nmeVal, imgVal) {
  const url = `https://5e005f441fb995001414060c.mockapi.io/Items/${editCount}`;
  console.log(url);
  console.log(editCount);

  const xml = new XMLHttpRequest();
  xml.open("PUT", url, true);

  xml.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xml.onload = () => {
    console.log(`sucess`);
    reverseForm();
  };

  xml.onerror = () => {
    console.log("something wrong");
  };
  xml.send(`name=${nmeVal}&pic=${imgVal}`);
}

function reverseForm() {
  nme.value = "";
  img.value = "";
  btn.innerHTML = "Add Item";
  form.addEventListener("submit", first);
  form.removeEventListener("submit", second);
  loadData(showData);
}
