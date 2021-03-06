document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 600) {
    new Splide(".splide", {
      perMove: 1,
      rewind: true,
      pagination: true,
      pauseOnHover: true,
      autoplay: false,
      fixedWidth: "250px",
      arrows: false,
    }).mount();
  } else {
    new Splide(".splide", {
      perPage: 3,
      perMove: 1,
      rewind: true,
      pagination: true,
      arrows: true,
      fixedWidth: "350px",
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      // breakpoints: {
      //   600: {
      //     autoplay: false,
      //     fixedWidth: "250px",
      //     arrows: false,
      //   },
      // },
    }).mount();
  }
});
// let container = document.querySelector(".slider_container");
// let tracker = document.querySelector(".slider_track");
// // let elements = document.querySelectorAll(".slider_item");

// let prevBtn = document.querySelector("#arrow-left");
// let nextBtn = document.querySelector("#arrow-right");
// let containerWidth = container.offsetWidth; //with 20 pixels, 10 - 10 of elements margin
// let elementWidth = document.querySelector(".slider_item").offsetWidth + 10; // width of element + margin

// let moveWidth = 0;
// let animationLoading = false;

// prevBtn.addEventListener("click", () => {
//   if (!animationLoading) {
//     if (moveWidth === 0) {
//       moveWidth = -1 * elementWidth * document.querySelectorAll(".slider_item").length + 3 * elementWidth;
//     } else {
//       moveWidth += elementWidth;
//     }
//     tracker.style.transform = `translateX(${moveWidth}px)`;
//     animationLoading = true;
//   }
// });

// nextBtn.addEventListener("click", () => {
//   if (!animationLoading) {
//     if (moveWidth === -1 * elementWidth * document.querySelectorAll(".slider_item").length + 3 * elementWidth) {
//       moveWidth = 0;
//     } else {
//       moveWidth -= elementWidth;
//     }
//     tracker.style.transform = `translateX(${moveWidth}px)`;
//     animationLoading = true;
//   }
// });

// tracker.addEventListener("transitionend", () => {
//   animationLoading = false;
// });
