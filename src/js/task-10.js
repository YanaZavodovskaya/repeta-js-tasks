function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBoxEl = document.querySelector("button[data-create]");
const destroyBoxEl = document.querySelector("button[data-destroy]");
const boxWrapper = document.getElementById("boxes");



destroyBoxEl.addEventListener('click', destroyBox); 


function destroyBox() {
  boxWrapper.innerHTML = '';
  inputEl.value = '';
}
  
createBoxEl.addEventListener('click', createBoxElClick); 

function createBoxElClick() {
  const amount = Number(inputEl.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  boxWrapper.insertAdjacentHTML('afterbegin', Array(amount).fill('<div></div>').join(""));
  createDivs();
}

function createDivs() {
  
const divs = [...boxWrapper.children];
  let boxBeginSize = 30;
  const step = 10;
  divs.forEach((div) => {
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = boxBeginSize + "px";
    div.style.height = boxBeginSize + "px";
    boxBeginSize += step;
  });
}



// function createBoxElClick() {
//   const amount = Number(inputEl.value);
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   const div = '<div></div>';
//   const boxes = Array(amount).fill(div).join("");
//   boxWrapper.insertAdjacentHTML('afterbegin', boxes);
//   const divs = [...boxWrapper.children];
//   let boxBeginSize = 30;
//   const step = 10;
//   divs.forEach((div) => {
//     div.style.backgroundColor = getRandomHexColor();
//     div.style.width = boxBeginSize + "px";
//     div.style.height = boxBeginSize + "px";
//     boxBeginSize += step;
//   });
// }
