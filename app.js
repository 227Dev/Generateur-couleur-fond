let css = document.querySelector("h3");
let couleur1 = document.querySelector(".couleur1");
let couleur2 = document.querySelector(".couleur2");
let fond = document.getElementById("content");

function setGradient() {
  fond.style.background =
    "linear-gradient(to right, " + couleur1.value + ", " + couleur2.value + ")";

  css.textContent = fond.style.background + ";";
}
couleur1.addEventListener("input", setGradient);
couleur2.addEventListener("input", setGradient);
