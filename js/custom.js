(function ($) {
  "use strict";

  // HERO SLIDE
  $(".hero-slide").backstretch(
    [
      "images/slideshow/1.png",
      "images/slideshow/2.png",
      "images/slideshow/3.png",
      "images/slideshow/4.png",
      "images/slideshow/5.png",
      "images/slideshow/6.png",
      "images/slideshow/7.png",
    ],
    { duration: 2000, fade: 750 }
  );

  // REVIEWS CAROUSEL
  $(".reviews-carousel").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);
