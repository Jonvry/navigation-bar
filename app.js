const navList = document.getElementById("nav_link_list");
const navLinks = document.querySelectorAll(".nav_link");
const btn_menu = document.getElementById("btn_menu");
const lines = document.querySelector(".line_menu");

btn_menu.addEventListener("click", () => {
  navList.classList.toggle("open");
  lines.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    lines.classList.remove("open");
  });
});
