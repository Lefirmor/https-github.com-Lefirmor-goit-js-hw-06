
const buttonRef = document.querySelector('.change-color')
const spanRef = document.querySelector('.color')
buttonRef.addEventListener('click', changeColor)

function changeColor(event){
  document.body.style.backgroundColor = spanRef.textContent = getRandomHexColor();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

