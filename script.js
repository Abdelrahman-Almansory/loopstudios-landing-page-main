const navBurgerBtn = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");

navBurgerBtn.addEventListener("click", function () {
  if (!navBurgerBtn.classList.contains("open")) {
    navBurgerBtn.classList.add("open");
    navBurgerBtn.classList.remove("close");
  } else {
    navBurgerBtn.classList.remove("open");
    navBurgerBtn.classList.add("close");
  }

  sideBar.classList.toggle("close");
});
