function createCircles() {
  const body = document.querySelector("body");
  const colors = [
    "#FFFACD",
    "#FFF5EE",
    "#F0FFF0",
    "#E6E6FA",
    "#FFE4E1",
    "#8470FF",
    "#00BFFF",
    "#00FFFF",
    "#B22222",
    "#FF7F50",
    "#FFC0CB",
  ];

  let circles = document.createElement("span");

  const size = Math.floor(Math.random() * 15);
  const color = Math.floor(Math.random() * colors.length);

  circles.style.background = colors[color];

  circles.style.width = 5 + size + "px";
  circles.style.height = 5 + size + "px";

  circles.style.top = Math.random() * innerHeight + "px";
  circles.style.left = Math.random() * innerWidth + "px";

  body.appendChild(circles);

  setTimeout(() => {
    body.removeChild(circles);
  }, 6000);
}

setInterval(() => {
  createCircles();
}, 100);