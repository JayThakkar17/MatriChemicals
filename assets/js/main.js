$(function () {
  "use strict";

  $(window).on("load", function (event) {
    $("#preloader").delay(500).fadeOut(500);
  });

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $(".navigation").removeClass("sticky");
    } else {
      $(".navigation").addClass("sticky");
    }
  });

  var html_body = $("html, body");
  $(".page-scroll").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 0,
          },
          1500
        );
        return false;
      }
    }
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });
  var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

  if (subMenu.length) {
    subMenu
      .parent("li")
      .children("a")
      .append(function () {
        return '<button class="sub-nav-toggler"> <img src="assets/images/arrow-down.svg" alt="arrow"> </button>';
      });

    var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

    subMenuToggler.on("click", function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false;
    });
  }

  function mainSlider() {
    var BasicSlider = $(".banner-slide");
    var BasicSlider2 = $(".banner-slide-2");
    var BasicSlider3 = $(".banner-slide-3");

    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-banner:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider2.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".banner-area-3:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider3.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".banner-area-4:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-banner[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider2.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.banner-area-3[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider3.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.banner-area-4[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );

    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
          },
        },
      ],
    });

    BasicSlider2.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow:
        '<span class="prev"><i class="flaticon-long-left-arrow"></i> prev</span>',
      nextArrow:
        '<span class="next">next <i class="flaticon-long-right-arrow"></i></span>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: false,
          },
        },
      ],
    });
    BasicSlider3.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: true,
      prevArrow:
        '<span class="prev"><i class="flaticon-long-left-arrow"></i> prev</span>',
      nextArrow:
        '<span class="next">next <i class="flaticon-long-right-arrow"></i></span>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows: false,
          },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  $(".testimonial-active").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".clients-active").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".shop-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".shop-thumb-active",
  });
  $(".shop-thumb-active").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".shop-active",
    dots: false,
    centerMode: true,
    arrows: false,
    centerPadding: "0",
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".container").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      transitionDuration: "1s",
    });

    $(".project-menu ul").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });

    $(".project-menu ul li").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  $(".projects-slide").owlCarousel({
    loop: true,
    items: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      576: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1600: {
        items: 5,
      },
    },
  });

  //===== Projects Slide

  $(".brand-active").owlCarousel({
    loop: true,
    items: 6,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      767: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      1600: {
        items: 6,
      },
    },
  });

  //===== Projects Slide

  $(".services-active").owlCarousel({
    loop: true,
    items: 3,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  });

  //===== Clients Slide

  $(".clients-slide").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 2000,
    nav: false,
    dots: true,
    margin: 50,
  });

  //====== Magnific Popup

  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //===== counter up
  $(".counter").counterUp({
    delay: 10,
    time: 2200,
  });

  // Progress Bar
  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      {
        accY: 0,
      }
    );
  }
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      {
        accY: 0,
      }
    );
  }

  //===== product quantity

  $(".add").click(function () {
    if ($(this).prev().val()) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //===== circleProgress

  if ($("#circle1").length > 0) {
    $("#circle1").circleProgress({
      value: 0.75,
      size: 190,
      lineCap: "square",
      reverse: true,
      emptyFill: "#d0dffd",
      thickness: "12",
      insertMode: "prepend ",
      fill: {
        gradient: ["#ff5e14"],
      },
    });
  }
  if ($("#circle2").length > 0) {
    $("#circle2").circleProgress({
      value: 0.85,
      size: 190,
      lineCap: "square",
      reverse: true,
      emptyFill: "#d0dffd",
      thickness: "10",
      fill: {
        gradient: ["#ff5e14"],
      },
    });
  }
  if ($("#circle3").length > 0) {
    $("#circle3").circleProgress({
      value: 0.5,
      size: 190,
      lineCap: "square",
      reverse: true,
      emptyFill: "#d0dffd",
      thickness: "10",
      fill: {
        gradient: ["#ff5e14"],
      },
    });
  }
  if ($("#circle4").length > 0) {
    $("#circle4").circleProgress({
      value: 0.65,
      size: 190,
      lineCap: "square",
      reverse: true,
      emptyFill: "#d0dffd",
      thickness: "10",
      fill: {
        gradient: ["#ff5e14"],
      },
    });
  }

  //=====
});
