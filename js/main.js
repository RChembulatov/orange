$(document).ready(function () {
  // кнопка наверх
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      $(".pageup").css("display", "block");
    } else {
      $(".pageup").css("display", "none");
    }
  });
  $(".pageup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  // кнопка наверх

  //Меню
  $(".header__burger").click(function () {
    $(".header__burger, .menu").toggleClass("active");
  });

  $(".menu__item, main").click(function () {
    $(".header__burger, .menu").removeClass("active");
  });
  //Меню

});
