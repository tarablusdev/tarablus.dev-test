const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".mobile-nav");
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
