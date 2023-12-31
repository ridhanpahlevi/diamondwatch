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

// sidebar klik untuk menghilangkan menu

const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
