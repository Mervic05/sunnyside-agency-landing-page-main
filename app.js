const mobileMenu = document.querySelector(".mobile");
const menubar = document.querySelector(".menubar > img");

menubar.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  mobileMenu.style.transition = "transform 0.5s ease-in-out";
});

mobileMenu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

window.onscroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? document.querySelector("header").classList.add("header--active")
    : document.querySelector("header").classList.remove("header--active");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
