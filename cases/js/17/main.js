const output = document.querySelector(".output");
const prompt = document.querySelector(".prompt");
const input = document.querySelector("input");
const randomNumber = Math.floor(Math.random() * 101);
let counter = 0;

input.focus();

prompt.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  counter++;

  if (input.value == randomNumber) {
    printMessage("Верно, это число " + randomNumber);
    printMessage("Количество попыток: " + counter);
    input.disabled = true;
  } else if (input.value > randomNumber) {
    printMessage("Много. Попробуй еще раз.");
    input.value = "";
  } else if (input.value < randomNumber) {
    printMessage("Мало. Попробуй еще раз.");
    input.value = "";
  }
}

function printMessage(message) {
  const li = document.createElement("li");

  li.textContent = message;

  output.appendChild(li);
}