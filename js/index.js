const hamburger = document.querySelector("#menu-button");
const menu = document.querySelector(".menu");
const close_button = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
close_button.addEventListener("click", () => {
  menu.classList.toggle("active");
});

function openPage(pageName, elmnt, color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "inline-block";
  elmnt.style.backgroundColor = color; 
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


AOS.init({
  offset: 200,
  duration: 1000,
});
