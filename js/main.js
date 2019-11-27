$(document).ready(function() {
  /*portfolio*/
  $(".button[filter]").click(function() {
    if ($(this).attr("val") == "off") {
      $(".button[filter]")
        .attr("val", "off")
        .removeClass("focused");
      $(this)
        .attr("val", "on")
        .addClass("focused");
      $(".filter > div").hide(300);
      $(".filter > div[filter=" + $(this).attr("filter") + "]").show(300);
      if ($(this).attr("filter") == "all") {
        $(".button[filter]")
          .attr("val", "off")
          .removeClass("focused");
        $(this)
          .attr("val", "on")
          .addClass("focused");
        $(".filter > div").show(300);
      }
    }
  });
  /*slider*/
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  /*menu*/
  $('ul.menu a[href^="#"').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      500
    );
    $('ul.menu a[href^="#"').css({ 'color': '#212121' });
    $(this).css({ 'color': '#004bee' });
    return false;
  });
  /*up botton*/
  $(window).scroll(function(){
    if ($(this).scrollTop() != 0)
    $('#toTop').fadeIn();
    else
    $('#toTop').fadeOut();
  });
  $('#toTop').click(function(){
    $('body, html').animate({
      scrollTop: 0
    }, 800);
  });
});
