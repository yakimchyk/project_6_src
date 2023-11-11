import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


/* const iconMenu = document.querySelector('.menu-header__icon');
const menuBody = document.querySelector('.menu-header__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
} */


const iconMenu = $('.menu-header__icon');
const menuBody = $('.menu-header__body');

$(iconMenu).click(function (e) {
   $('body').toggleClass('_lock');
   iconMenu.toggleClass('_active');
   menuBody.toggleClass('_active');
});

$(document).click(function(e){
   if(!menuBody.is(e.target)
   && !$('.menu-header__list').is(e.target)
   && !iconMenu.is(e.target)
   /* && !$('span').is(e.target) */
   && iconMenu.has(e.target).length === 0) {
      menuBody.removeClass('_active');
      iconMenu.removeClass('_active');
      $('body').removeClass('_lock');
   }
});

//полифил PointerEvents
$(document).on('pointerdown', function (e) {
   if(!menuBody.is(e.target)
   && menuBody.has(e.target).length === 0
   && !iconMenu.is(e.target)
   && iconMenu.has(e.target).length === 0) {
      menuBody.removeClass('_active');
      iconMenu.removeClass('_active');
      setTimeout(function() {
         $('body').removeClass('_lock');
     }, 200)
   }
   // Getting coordinates
   var top = e.clientX;
   var left = e.clientY;
   // Detecting the underlying event type
   // Can be "mouse", "touch", or "pen"
   var underlyingEvent = e.originalType.pointerType;
});


/*  $('.menu-header__link').click(function (e) {
   menuBody.removeClass('_active');
   iconMenu.removeClass('_active');
   $('body').removeClass('_lock');
}); */


let buttontext = $('.more__button').text();
$('.more__button').click(function(){ 
   $('.more__text').toggleClass('_active');
   if($('.more__text').hasClass('_active')) {
      $('.more__button').html('Свернуть');
   }
   if(!$('.more__text').hasClass('_active')) {
      $('.more__button').html(buttontext);
   }
});


//прокрутка при клике:
$('.slide-up').click(function(e){
   e.preventDefault();
   let href = $(this).data('goto');
   $('html, body').animate({scrollTop: $(href).offset().top}, 400);
});



$('.slider').slick({
   dots: true,
   infinite: true,
   arrows: false,
   speed: 300,
/*    centerMode: true,
   variableWidth: true, */
   cssEase: 'linear'
});

$('.slider-comment__cont').slick({
   dots: true,
   infinite: true,
   arrows: false,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 3,
   cssEase: 'ease',
   responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
