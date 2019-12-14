/*selectors */
const budgetBtn = document.querySelector(".budget-btn");
const budgetInput = document.querySelector(".budget-inpt");
const err = document.querySelectorAll(".err");
const budgetOut = document.querySelector(".budget-out");
const expenseTxt = document.querySelector(".expense-txt");
const expenseAmt = document.querySelector(".expense-amt");
const expenseBtn = document.querySelector(".expense-btn");
const expenseOut = document.querySelector(".expense-out");
const balance = document.querySelector(".balance");
const create = document.querySelector(".create");

budgetBtn.addEventListener("click", function() {
  let val = budgetInput.value;

  if (val == "" || val < 0) {
    err[0].classList.add("show");
  } else {
    budgetOut.innerHTML = val;
    balance.innerHTML = budgetOut.innerHTML - expenseOut.innerHTML;
  }
});

expenseBtn.addEventListener("click", function() {
  let val = expenseAmt.value;

  if (val == "") {
    err[1].classList.add("show");
  } else {
    expenseOut.innerHTML = val;
    balance.innerHTML = budgetOut.innerHTML - expenseOut.innerHTML;

    // create
    let n = document.createElement("p");
    n.innerHTML = expenseTxt.value;
    create.appendChild(n);
  }
});
