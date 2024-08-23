hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark__mode");
  darkMode.classList.toggle("hide");
  lightMode.classList.remove("hide");
});

lightMode.addEventListener("click", () => {
  document.body.classList.remove("dark__mode");
  lightMode.classList.toggle("hide");
  darkMode.classList.remove("hide");
});
