// customer
$('.rev__slider').slick({
  arrows: false,
  speed: 1500,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});

// products
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-cream-open]'),
    closeModalBtn: document.querySelector('[data-modal-cream-close]'),
    modal: document.querySelector('[data-modal-cream]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-coffee-open]'),
    closeModalBtn: document.querySelector('[data-modal-coffee-close]'),
    modal: document.querySelector('[data-modal-coffee]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-milkshakes-open]'),
    closeModalBtn: document.querySelector('[data-modal-milkshakes-close]'),
    modal: document.querySelector('[data-modal-milkshakes]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// footer
AOS.init();

// var time = 2,
//   cc = 1;
// $(window).scroll(function () {
//   $('#counter').each(function () {
//     var cPos = $(this).offset().top,
//       topWindow = $(window).scrollTop();
//     if (cPos < topWindow + 300) {
//       if (cc < 2) {
//         $('.advantages__item').addClass('viz');
//         $('div').each(function () {
//           var i = 1,
//             num = $(this).data('num'),
//             step = (1000 * time) / num,
//             that = $(this),
//             int = setInterval(function () {
//               if (i <= num) {
//                 that.html(i);
//               } else {
//                 cc = cc + 2;
//                 clearInterval(int);
//               }
//               i++;
//             }, step);
//         });
//       }
//     }
//   });
// });
