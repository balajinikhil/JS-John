let img = document.querySelector("img");
let previousBtn = document.querySelector(".p");
let nextBtn = document.querySelector(".n");

let count = 0;
previousBtn.addEventListener("click", previousImg);

function checkCount() {
  if (count <= 0) {
    count = 8;
  } else if (count > 8) {
    count = 1;
  }
}

function previousImg(e) {
  count -= 1;
  checkCount();
  img.setAttribute("src", `./media/img-${count}.jpg`);
}

nextBtn.addEventListener("click", nextImg);
function nextImg(e) {
  count += 1;
  checkCount();
  img.setAttribute("src", `./media/img-${count}.jpg`);
}
