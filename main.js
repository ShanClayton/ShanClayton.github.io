$(document).ready(function (){
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
  //NAV BAR
  $('.top-nav .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

    // SMOOTH SCROLL
  $('nav a[href*="#"]').on('click', function(){
    $('html, body').animate({
      scrollTop:$($(this).attr('href')).offset().top -100
    }, 2000)
  });

  // UP BUTTON
  $('#up').on('click', function(){
    $('html, body').animate({
      scrollTop:0
    }, 2000)
  });

  // AOS
  AOS.init({
     easing: 'ease',
     duration: 500,
     once: true
  });
});
