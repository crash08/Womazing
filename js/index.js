window.addEventListener('DOMContentLoaded', function () {

  //Инициализация свайпера в секции hero
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


  //Инициализация свайпера в секции about
  const swiper2 = new Swiper('.swiper-2', {

    loop: true,

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


  //Назначение действий кнопок свайпера на свои классы
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


  //Реализация модального окна "Обратный звонок"
  var headerCall = document.querySelector('#headerCall');
  var callbackPopupWrap = document.querySelector('#callbackPopupWrap');
  var callbackPopupForm = document.querySelector('#callbackPopupForm');
  var callbackPopupResult = document.querySelector('#callbackPopupResult');
  var callbackPopupCloseResult = document.querySelector('#callbackPopupCloseResult');
  var callbackPopupClose = document.querySelector('#callbackPopupClose');

  headerCall.addEventListener('click', function () {
    callbackPopupWrap.style.display = 'flex';
  })
  callbackPopupClose.addEventListener('click', function () {
    callbackPopupWrap.style.display = 'none';
  })
  callbackPopupCloseResult.addEventListener('click', function () {
    callbackPopupWrap.style.display = 'none';
  })


  //Отправка формы и проверка ответа сервера
  var form = document.querySelector('#form')

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(this) // Сборка формы
    var url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: data // Отправка самой формы
    })
      .then(response => response.json())
      .then((json) => { // Ответ
        if (json.id === 101) { // Для примера проверка пройдена если id === 101
          // Если проверка пройдена
          callbackPopupForm.style.display = 'none';
          callbackPopupResult.style.display = 'flex';
        }
        // Дебаг узнать что прошла форма
        //console.log(json)
      })
    //.catch(err => console.log(err));
  })
})
