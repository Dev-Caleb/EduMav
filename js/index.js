const hamburger = document.querySelector("#menu-button");
const menu = document.querySelector(".menu");
const close_button = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
close_button.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// AOS.init({
//   offset: 200,
//   duration: 1000,
// });
