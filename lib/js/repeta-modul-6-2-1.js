"use strict";

var targetBtn = document.querySelector('.js-target-btn');
var addListenerBtn = document.querySelector('.js-add-listener');
var removeListenerBtn = document.querySelector('.js-remove-listener'); // addListenerBtn.addEventListener('click', () => {
//     console.log('Кликом на кнопку Добавить слушателя, вешаю на Целевую кнопку слушателя события Клик');
//     targetBtn.addEventListener('click', () => {
//     console.log('Клик по целевой кнопке');
// })
// })
// removeListenerBtn.addEventListener('click', () => {
//     console.log('Кликом на кнопку Снять слушателя, снимаю с целевой кнопки слушателя события Клик');
//     targetBtn.removeEventListener('click', () => {
//     console.log('Клик по целевой кнопке');
// })
// })
//  =============== подписка ===============

addListenerBtn.addEventListener('click', function () {
  console.log('Кликом на кнопку Добавить слушателя, вешаю на Целевую кнопку слушателя события Клик');
  targetBtn.addEventListener('click', onTargetBtnClick);
}); // =============== отписка ===============

removeListenerBtn.addEventListener('click', function () {
  console.log('Кликом на кнопку Снять слушателя, снимаю с целевой кнопки слушателя события Клик');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
  console.log('Клик по целевой кнопке');
} // //  =============== подписка ===============
// addListenerBtn.addEventListener('click', (event) => {
//     console.log('Кликом на кнопку Добавить слушателя, вешаю на Целевую кнопку слушателя события Клик');
//     targetBtn.addEventListener('click', onTargetBtnClick);
// })
// // =============== отписка ===============
// removeListenerBtn.addEventListener('click', (event) => {
//     console.log('Кликом на кнопку Снять слушателя, снимаю с целевой кнопки слушателя события Клик');
//     targetBtn.removeEventListener('click', onTargetBtnClick);
// })
// function onTargetBtnClick(event) {
//     console.log('Клик по целевой кнопке');
// }
// если не нужно будет отписывать слушателя события то можно использовать анонимную функции () =>
// если отписываться нужно будет, то нужно создать внешнюю колбэк функцию, в нашем примере это function onTargetBtnClick
// targetBtn.addEventListener('click', () => {
//     console.log('Клик');
// })
// ===========================================================================
// targetBtn.addEventListener('click', handleClick)
// function handleClick() {
//     console.log('Клик');
// }
// ===========================================================================
// targetBtn.addEventListener('click', handleTargetBtnClick)
// function handleTargetBtnClick() {
//     console.log('Клик');
// }
// ===========================================================================
// targetBtn.addEventListener('click', targetBtnClickHandler)
// function targetBtnClickHandler() {
//     console.log('Клик');
// }
// ===========================================================================
// targetBtn.addEventListener('click', onTargetBtnClick)
// function onTargetBtnClick() {
//     console.log('Клик');
// }
// ===========================================================================


function logMessage() {
  console.log('Клик по целевой кнопке');
}