$(document).ready(function () {

  //Меню
  $(".header__burger").click(function () {
    $(".header__burger, .menu").toggleClass("active");
  });

  $(".menu__item, main").click(function () {
    $(".header__burger, .menu").removeClass("active");
  });
  //Меню

});
