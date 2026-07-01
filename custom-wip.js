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
