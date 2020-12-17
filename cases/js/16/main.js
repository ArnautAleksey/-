const start = document.querySelector(".start");
const levels = document.querySelectorAll(".level");
const game = document.querySelector(".game");
const items = document.querySelectorAll(".item");
const end = document.querySelector(".end");
const score = document.querySelector(".score");
const restart = document.querySelector(".restart");
let counter = 0;
let easyLevelTime;
let normalLevelTime;
let hardLevelTime;

changeItem();

function changeItem() {
  const random = Math.floor(Math.random() * items.length);
  items[random].classList.add("active");
}

function gameLevel() {
  end.classList.add("hidden");
  start.classList.remove("hidden");
}

function gameStart() {
  start.classList.add("hidden");
  game.classList.remove("hidden");
}

function gameEnd() {
  end.classList.remove("hidden");
  game.classList.add("hidden");
}

levels.forEach((level) => {
  level.addEventListener("click", () => {
    gameStart();
    counter = 0;
    if (level.classList.contains("level-1")) {
      easyLevel();
    } else if (level.classList.contains("level-2")) {
      normalLevel()
    } else if (level.classList.contains("level-3")) {
      hardLevel()
    }
  });
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      items.forEach((item) => {
        item.classList.remove("active");
      });
      changeItem();
      counter++;
      score.textContent = counter;
      clearTimeout(easyLevelTime);
      easyLevel();
      clearTimeout(normalLevelTime);
      normalLevel();
      clearTimeout(hardLevelTime);
      hardLevel();
    } else {
      gameEnd();
      counter = 0;
    }
  });
});

restart.onclick = () => {
  gameLevel();
  clearTimeout(easyLevelTime);
  clearTimeout(normalLevelTime);
  clearTimeout(hardLevelTime);
};

function easyLevel() {
  easyLevelTime = setTimeout(() => {
    gameEnd();
  }, 3000);
}

function normalLevel() {
  normalLevelTime = setTimeout(() => {
    gameEnd();
  }, 2000);
}

function hardLevel() {
  hardLevelTime = setTimeout(() => {
    gameEnd();
  }, 1000);
}