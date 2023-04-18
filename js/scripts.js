// navigation slide-in
$(window).load(function () {
  $(".nav_slide_button").click(function () {
    $(".pull").slideToggle();
  });
});
// first-flexslider
$(window).load(function () {
  $("#firstSlider").flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: false,
    start: function () {
      $.waypoints("refresh");
    },
  });
});
// second-flexslider
$(window).load(function () {
  $("#secondSlider").flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    start: function () {
      $.waypoints("refresh");
    },
  });
});
$(".prev, .next").on("click", function () {
  var href = $(this).attr("href");
  $("#secondSlider").flexslider(href);
  return false;
});
// waypoints
$(document).ready(function () {
  $(".wp1").waypoint(
    function () {
      $(".wp1").addClass("animated fadeInUp");
    },
    {
      offset: "75%",
    }
  );

  $(".wp2").waypoint(
    function () {
      $(".wp2").addClass("animated fadeInUp");
    },
    {
      offset: "75%",
    }
  );

  $(".wp3").waypoint(
    function () {
      $(".wp3").addClass("animated fadeInUpD");
    },
    {
      offset: "75%",
    }
  );
});
// smooth scroll
$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          2000
        );
        return false;
      }
    }
  });
});
// fancyBox
$(document).ready(function () {
  $(".various").fancybox({
    maxWidth: 700,
    maxHeight: 350,
    fitToView: false,
    width: "65%",
    height: "65%",
    autoSize: false,
    closeClick: false,
    openEffect: "none",
    closeEffect: "none",
  });
});

//-----------------------------------slider--------------------------------
$(window).load(function () {
  $("#firstSlider").flexslider({
    animation: "slides1",
    directionNav: false,
    controlNav: true,
    touch: false,
    start: function () {
      $.waypoints("refresh");
    },
  });
});
// second-flexslider
$(window).load(function () {
  $("#secondSlider").flexslider({
    animation: "slides1",
    directionNav: false,
    controlNav: false,
    touch: false,
  });
});
$(".prev, .next").on("click", function () {
  var href = $(this).attr("href");
  $("#secondSlider").flexslider(href);
  return false;
});
