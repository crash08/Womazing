window.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 3500,
    },

    speed: 800,
  });



  const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },

    speed: 400,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')

  swiperPrev.addEventListener('click', () => {
    swiper2.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    swiper2.slideNext();
  })


  //Добавление класса при скролл
  var header = document.querySelector('#header');

  window.onscroll = function () {
    windowScroll();
  };

  function windowScroll() {
    header.classList.toggle("scroll", header.scrollTop > 10 || document.documentElement.scrollTop > 10);
  }
})
