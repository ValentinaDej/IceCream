const swiper = new Swiper('.swiper-gallary', {
  // Optional parameters
  direction: 'horizontal',
  //direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar2',
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    },
  },
});
