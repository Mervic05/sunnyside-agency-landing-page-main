const mobileMenu = document.querySelector(".mobile");
const menubar = document.querySelector(".menubar img");

menubar.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  mobileMenu.style.transition = "transform 0.5s ease-in-out";
});

mobileMenu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

/* const header = document.querySelector(".header");
// const body = document.getElementsByTagName("body");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow");
}); */

window.onscroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? document.querySelector("header").classList.add("header--active")
    : document.querySelector("header").classList.remove("header--active");
};
