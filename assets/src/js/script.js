const navSlide = () => {
  const navToggler = document.querySelector(".nav-toggler");
  const navMenu = document.querySelector(".nav-menu");

  navToggler.addEventListener("click", () => {
    //   nav toggle
    navMenu.classList.toggle("nav-active");

    // toggler animate
    navToggler.classList.toggle("toggle");
  });
};

navSlide();
