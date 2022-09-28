"use strict";

// В css есть класс show-window, который необходио добавить на body при открытии модалки
var refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop')
};
refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  console.log(event.currentTarget);
  console.log(event.target);

  if (event.currentTarget === event.target) {
    console.log('Клик по бэкдропу');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  var ESC_KEY_CODE = 'Escape';

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
} // function onEscKeyPress(event) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = event.code === ESC_KEY_CODE;
//     if (isEscKey) {
//         onCloseModal();
//     }