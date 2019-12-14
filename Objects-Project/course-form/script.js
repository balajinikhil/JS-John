(function() {
  document.addEventListener("DOMContentLoaded", function() {
    let disp = new Display();
    disp.checkField();
    disp.disableBtn();
  });
  //customer

  document
    .querySelector(".customer-form")
    .addEventListener("submit", function(e) {
      e.preventDefault();

      const name = this.querySelector(".name").value;
      const course = this.querySelector(".course").value;
      const author = this.querySelector(".author").value;

      const custm = new Customer(name, course, author);
      console.log(custm);

      let disp1 = new Display();
      disp1.clearField();
      disp1.feedback(custm);
    });

  //   Display
  function Display() {
    this.name = document.querySelector(".name");
    this.course = document.querySelector(".course");
    this.author = document.querySelector(".author");
  }
  Display.prototype.checkField = function() {
    console.log(this);

    this.name.addEventListener("blur", this.validateForm);
    this.course.addEventListener("blur", this.validateForm);
    this.author.addEventListener("blur", this.validateForm);
  };

  Display.prototype.validateForm = function() {
    if (this.value == "") {
      this.classList.add("fail");
      this.classList.remove("complete");
    } else {
      this.classList.add("complete");
      this.classList.remove("fail");
    }

    let comp = document.querySelectorAll(".complete");
    if (comp.length == 3) {
      document.querySelector(".btn").disabled = false;
    }
  };
  Display.prototype.disableBtn = function() {
    document.querySelector(".btn").disabled = true;
  };

  Display.prototype.clearField = function() {
    this.name.value = "";
    this.course.value = "";
    this.author.value = "";

    this.name.classList.remove("complete", "fail");
    this.course.classList.remove("complete", "fail");
    this.author.classList.remove("complete", "fail");
    document.querySelector(".btn").disabled = "true";
  };
  Display.prototype.feedback = function(custm) {
    console.log(custm);

    //show loading
    document.querySelector(".loading").classList.add("show");
    // remove
    setTimeout(function loading() {
      document.querySelector(".loading").classList.remove("show");
    }, 3000);
    // creating content

    const add = document.querySelector(".new");
    let cre = document.createElement("div");
    cre.innerHTML = `<div class="gap">
    <img src="./pic-1.jpeg" alt="no-pic">

        <h4> Name : ${custm.name}</h4 >
        <h4>Course : ${custm.course}</h4>
        <h4>Author :${custm.author}</h4> 
        </div>`;

    add.appendChild(cre);
  };

  function Customer(name, course, author) {
    this.name = name;
    this.course = course;
    this.author = author;
  }
})();
