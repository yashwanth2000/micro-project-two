document.addEventListener("DOMContentLoaded", function () {
    var socialIcons = document.querySelector(".social-icons");
    var navbar = document.querySelector("header");
  
    window.addEventListener("scroll", function () {
      var navbarHeight = navbar.offsetHeight;
  
      if (window.scrollY > navbarHeight) {
        socialIcons.classList.add("sticky");
      } else {
        socialIcons.classList.remove("sticky");
      }
    });
  });
  