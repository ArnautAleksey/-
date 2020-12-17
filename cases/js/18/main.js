const firstItem = document.querySelector(".first-item");
const secondItem = document.querySelector(".second-item");
const overflow = document.querySelector(".overflow");
const score = document.querySelector(".score span");
let counter = 0;

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}

function setItem() {
  const firstNum = randomNum();
  const secondNum = randomNum();

  if (firstNum == secondNum) {
    firstNum++;
  }

  firstItem.textContent = firstNum;
  secondItem.textContent = secondNum;
}

firstItem.onclick = () => {
  const firstNum = Number(firstItem.textContent);
  const secondNum = Number(secondItem.textContent);
  counter++;

  if (firstNum > secondNum) {
    firstItem.classList.add("succes");

  } else {
    alert("Вы проиграли");
    counter = 0;
  }

  overflow.classList.add("active");

  setTimeout(() => {
    setItem();
    overflow.classList.remove("active");
    firstItem.classList.remove("succes");
    firstItem.classList.remove("danger");
  }, 100);

  score.textContent = counter;
};

secondItem.onclick = () => {
  const firstNum = Number(firstItem.textContent);
  const secondNum = Number(secondItem.textContent);
  counter++;

  if (firstNum < secondNum) {
    secondItem.classList.add("succes");
  } else {
    alert("Вы проиграли");
    counter = 0;
  }

  overflow.classList.add("active");

  setTimeout(() => {
    setItem();
    overflow.classList.remove("active");
    secondItem.classList.remove("succes");
    firstItem.classList.remove("danger");
  }, 100);

  score.textContent = counter;
};

setItem();
