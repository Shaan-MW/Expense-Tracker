const balance = document.querySelector('.balance');
const incomeAmount = document.querySelector('.income-amount');
const expenseAmount = document.querySelector('.expense-amount');
const transactionsList = document.querySelector('.transactions');
const descriptionEl = document.getElementById('#description');
const amountEl = document.getElementById('#amount');
const transactionFormEl = document.querySelector('.forms');

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEl.addEventListener('submit', addTransaction);
function addTransaction(e){
    e.preventDefault();

    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);

    console.log(description);
    console.log(typeof amount);
}
