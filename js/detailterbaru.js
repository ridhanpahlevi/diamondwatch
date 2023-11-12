const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  document.querySelectorAll.onclick = () => {
    navbarNav.classList.toggle("");
  };
};
// search form
const searchForm = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};
var slideIndex = 1;
showSlide(slideIndex);
function nextslide(n) {
  showSlide((slideIndex += n));
}
function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("imgslide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? a : a;
  num.innerText = a;
  console.log(a);
});
minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? a : a;
    num.innerText = a;
  }
});
