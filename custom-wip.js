(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* Navbar shrink on scroll */
    var header = document.querySelector(".site-header");
    if (header) {
      var shrinkHeader = function () {
        var scrollY = window.scrollY;
        if (scrollY > 120) {
          header.classList.add("scrolled");
        } else if (scrollY < 40) {
          header.classList.remove("scrolled");
        }
      };
      window.addEventListener("scroll", shrinkHeader, { passive: true });
      // Run on initial load in case the page is already scrolled down
      shrinkHeader();
    }

    /* Close mobile nav when clicking outside the menu */
    var mainNav = document.getElementById("mainNav");
    var navbarToggler = document.querySelector(".navbar-toggler");

    if (mainNav && navbarToggler && typeof bootstrap !== "undefined") {
      var navbarCollapse = bootstrap.Collapse.getOrCreateInstance(mainNav, { toggle: false });

      document.addEventListener("click", function (event) {
        if (!mainNav.classList.contains("show")) {
          return;
        }

        if (window.getComputedStyle(navbarToggler).display === "none") {
          return;
        }

        if (mainNav.contains(event.target) || navbarToggler.contains(event.target)) {
          return;
        }

        navbarCollapse.hide();
      });
    }

    // Swiper News Slider
    var el = document.getElementById("newsSwiper");

    if (!el || typeof Swiper === "undefined") {
      return;
    }

    var swiper = new Swiper(el, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        prevEl: el.querySelector(".news-prev"),
        nextEl: el.querySelector(".news-next"),
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    });
  });
})();
