"use strict";

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// tagsContainer.addEventListener('click', onTagsContainerClick);
// function onTagsContainerClick(evt) {
//     // выводим целевой элемент
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     // console.log(evt.target);
//     const currentActiveBtn = document.querySelector('.tags__btn--active');
//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn--active');
//     }
//     // currentActiveBtn?.classList.remove('tags__btn--active');
//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log(selectedTag);
// }
var tagsContainer = document.querySelector('.js-tags'); // Set хранит коллекцию уникальных значений. Повторяющиеся не записывает

var selectedTags = new Set();
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  } // console.log(evt.target);
  // toggle. если кликнем на кнопку то тогл добавит класс,
  // если еще раз кликнем то тогл снимет класс


  var btn = evt.target;
  var tag = btn.dataset.value;
  var isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags["delete"](tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);
}