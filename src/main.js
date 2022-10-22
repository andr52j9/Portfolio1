import "./style.css";

// Lav en variabel, der refererer til ".toggle-btn"
const burger = document.querySelector("#burgerikon");

// Lav en variabel, der refererer til "nav"
const content = document.querySelector("#menu_content");

const kryds = document.querySelector("#kryds");

burger.addEventListener("click", showcontent);
kryds.addEventListener("click", hidecontent);

function showcontent() {
  content.classList.add("show");
  burger.classList.add("hidden");
  kryds.classList.remove("hidden");
}
function hidecontent() {
  content.classList.remove("show");
  burger.classList.remove("hidden");
  kryds.classList.add("hidden");
}
