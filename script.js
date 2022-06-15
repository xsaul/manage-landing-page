let slides = document.getElementsByClassName("avatar-card");
let dots = document.getElementsByClassName("dot");
let slideIndex = 0;
let i;
const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.querySelector(".mobile-menu");
showSlides();

burger.addEventListener("click", () => {
  menu.style.display = "flex";
  close.style.display = "block";
  burger.style.display = "none";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
  burger.style.display = "block";
  close.style.display = "none";
});

function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}
