let nameElement = document.querySelector(".name");
let amountEntered = document.querySelector(".amount");
let btnDeposit = document.querySelector(".btn-deposit");
let btnWithdraw = document.querySelector(".btn-withdraw");
let balanceElement = document.querySelector(".balance");
let transactionList = document.querySelector(".transaction-list");

let customers = [];
let transactionArray = [];

//customer class
class Customer {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

let customer1 = new Customer("Customer 1", 10000);
customers.push(customer1);

// transaction class
class Transaction {
  constructor(transactionAmount, transactionType, updatedBalance) {
    this.transactionAmount = transactionAmount;
    this.transactionType = transactionType;
    this.updatedBalance = updatedBalance;
  }
}

//Setting the default value of customer account
function setDefault() {
  let balanceElement = document.querySelector(".balance");

  nameElement.textContent = "Name: " + customer1.name;
  balanceElement.textContent = "Balance: " + customer1.balance;
}

//Deposit handler
btnDeposit.addEventListener("click", (event) => {
  let userInput = parseInt(amountEntered.value);
  customer1.deposit(userInput);
  let currentBalance = customer1.balance;
  let transactionType = event.target.dataset.type;
  balanceElement.innerHTML = "Balance: " + currentBalance;

  let transaction = new Transaction(userInput, transactionType, currentBalance);
  transactionArray.push(transaction);
  logTransaction();
});

//withdraw handler
btnWithdraw.addEventListener("click", (event) => {
  let userInput = parseInt(amountEntered.value);
  customer1.withdraw(userInput);

  let currentBalance = customer1.balance;
  console.log(currentBalance);
  let transactionType = event.target.dataset.type;
  balanceElement.innerHTML = "Balance: " + currentBalance;

  let transaction = new Transaction(userInput, transactionType, currentBalance);
  transactionArray.push(transaction);
  logTransaction();
});

function logTransaction() {
  // transactionArray.innerHTML = "";

  let transactionList = document.querySelector(".transaction-list");
  let latestTransaction = transactionArray[transactionArray.length - 1];

  let li = document.createElement("li");
  li.setAttribute("class", "list-item");
  li.innerHTML = `<div>${latestTransaction.transactionType}</div>
  <div>${latestTransaction.transactionAmount}</div>
  <div>${latestTransaction.updatedBalance}</div>`;
  transactionList.appendChild(li);
}

setDefault();
