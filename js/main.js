const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoHeight: true,
  spaceBetween: 10,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".stageButtonRightContainer",
    prevEl: ".stageButtonLeftContainer",
  },
});

const swiperInfo = new Swiper(".swiperInfo", {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".stageButtonRightContainer",
    prevEl: ".stageButtonLeftContainer",
  },
});
