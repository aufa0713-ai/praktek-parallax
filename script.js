let Clouds = document.getElementById("Clouds");
let Mountains = document.getElementById("Mountains");


window.addEventListener("scroll", () => {
  let value = window.scrollY;

  Clouds.style.top = value * -0.1 + "px";
  Clouds.style.transform = `scale(${1 + value * 0.001})`;
});


