const newYear = new Date("Jan 1 2021 00:00:00");

const daysVal = document.querySelector(".days");
const hoursVal = document.querySelector(".hours");
const minutesVal = document.querySelector(".minutes");
const secondsVal = document.querySelector(".seconds");

const daysTitle = document.querySelector(".days-title");
const hoursTitle = document.querySelector(".hours-title");
const minutesTitle = document.querySelector(".minutes-title");
const secondsTitle = document.querySelector(".seconds-title");

function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

function timeCount() {
  let now = new Date();
  let leftUntil = newYear - now;

  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(leftUntil / 1000 / 60) % 24;
  let seconds = Math.floor(leftUntil / 1000) % 60;

  daysVal.textContent = days;
  hoursVal.textContent = hours;
  minutesVal.textContent = minutes;
  secondsVal.textContent = seconds;

  daysTitle.textContent = declOfNum(days, ["День", "Дня", "Дней"]);
  hoursTitle.textContent = declOfNum(hours, ["Час", "Часа", "Часов"]);
  minutesTitle.textContent = declOfNum(minutes, ["Минута", "Минуты", "Минут"]);
  secondsTitle.textContent = declOfNum(seconds, [
    "Секунда",
    "Секунды",
    "Секунд",
  ]);
}

function createSnowflake() {
  const container = document.querySelector(".container");

  let snowflake = document.createElement("span");
  snowflake.classList.add("snowflake");

  let size = Math.floor(Math.random() * 20);

  snowflake.style.width = 5 + size + "px";
  snowflake.style.height = 5 + size + "px";

  snowflake.style.top = Math.random() * innerWidth + 'px';
  snowflake.style.left = Math.random() * innerWidth + 'px';

  container.appendChild(snowflake);

  setTimeout(() => {
    container.removeChild(snowflake)
  }, 20000)
}


setInterval(timeCount, 1000);
timeCount();
setInterval(createSnowflake, 100)
createSnowflake();
