function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const btCreate = document.querySelector('[data-create]');
const btDestroy = document.querySelector('[data-destroy]');
const createBox = document.querySelector("#boxes");

btCreate.addEventListener("click", valueCreate);

function createBoxes(amount) {

}

let step = 30;
function valueCreate() {
  step += 10;
  createBox.style.width = `${step}px`;
  createBox.style.height = `${step}px`;
  createBox.style.backgroundColor = getRandomHexColor();
  console.log(step);
}

function valueValid() {
  
}