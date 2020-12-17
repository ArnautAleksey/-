const container = document.querySelector(".container");

function createEl() {
  for (let i = 0; i < 546; i++) {
    let square = document.createElement("span");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
  }
}

function setColor(element) {
  const color = randomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function randomColor() {
  return '#' + Math.random().toString(16).substr(2,6);
};

createEl();
