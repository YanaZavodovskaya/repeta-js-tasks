"use strict";

var _transactions = _interopRequireDefault(require("./transactions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// console.log(transactionHistory);
// const makeTransactionTableRowMarkup = transaction => {
//     return `<tr>
//         <td>${transaction.id}</td>
//         <td>${transaction.amount}</td>
//         <td>${transaction.date}</td>
//         <td>${transaction.business}</td>
//         <td>${transaction.type}</td>
//         <td>${transaction.name}</td>
//         <td>${transaction.account}</td>
//       </tr>`
// };
// const makeTransactionTableRowMarkup = transaction => { 
//     const { id, amount, date, business, type, name, account } = transaction;
//     return `<tr>
//         <td>${id}</td>
//         <td>${amount}</td>
//         <td>${date}</td>
//         <td>${business}</td>
//         <td>${type}</td>
//         <td>${name}</td>
//         <td>${account}</td>
//       </tr>`
// };
var makeTransactionTableRowMarkup = function makeTransactionTableRowMarkup(_ref) {
  var id = _ref.id,
      amount = _ref.amount,
      date = _ref.date,
      business = _ref.business,
      type = _ref.type,
      name = _ref.name,
      account = _ref.account;
  return "<tr>\n        <td>".concat(id, "</td>\n        <td>").concat(amount, "</td>\n        <td>").concat(date, "</td>\n        <td>").concat(business, "</td>\n        <td>").concat(type, "</td>\n        <td>").concat(name, "</td>\n        <td>").concat(account, "</td>\n      </tr>");
}; // console.log(makeTransactionTableRowMarkup(transactionHistory[0]));


var tableEl = document.querySelector('.js-transaction-table');

var makeTransactionTableRows = _transactions["default"].map(makeTransactionTableRowMarkup).join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
console.log(makeTransactionTableRows);