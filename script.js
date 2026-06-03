const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navlist");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active-menu");
});

document.querySelectorAll(".navlinks").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active-menu");
  });
});

lucide.createIcons();
