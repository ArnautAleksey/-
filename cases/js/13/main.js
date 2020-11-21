const out = document.querySelector(".out");
const generate = document.querySelector(".generate");
const copy = document.querySelector(".copy");
let password = "";

generate.addEventListener("click", () => {
  const chars =
    "1234567890ajsbktcludmvenwfoxgpyhqzirAJSBKTCLUDMVENWFOXGPYHQZIR";
  let symbols = "";

  for (let i = 0; i < 12; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    symbols += chars.substring(randomNumber, randomNumber + 1);
    password = symbols.split("");
    password.splice(4, 0, "-");
    password.splice(9, 0, "-");
  }
  out.value = password.join("");
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(out.value);
});
