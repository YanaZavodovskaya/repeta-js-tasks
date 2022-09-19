import transactionHistory from './transactions.js';

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

const makeTransactionTableRowMarkup = ({id, amount, date, business, type, name, account}) => { 
    return `<tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${type}</td>
        <td>${name}</td>
        <td>${account}</td>
      </tr>`
};

// console.log(makeTransactionTableRowMarkup(transactionHistory[0]));
const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
console.log(makeTransactionTableRows);
