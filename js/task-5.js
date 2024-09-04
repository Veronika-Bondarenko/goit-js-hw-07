function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return color;
}
const colorBody = document.querySelector("body");
const textColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", handleClick);

function handleClick() {
  colorBody.style.background = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}
