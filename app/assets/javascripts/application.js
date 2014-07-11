// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.min
//= require front/js/jquery-1.11.0.min
//= require front/js/bootstrap
//= require front/js/jquery.easing.1.3
//= require front/js/jquery.bxslider
//= require front/js/jquery.mousewheel
//= require front/js/jquery.selectik
//= require front/js/jquery.mousewheel-3.0.4.pack
//= require front/js/jquery.countdown
//= require front/js/jquery.checkbox
//= require jquery-auto
//= require front/js/jquery.fancybox
//= require bootstrap-datepicker
//= require gmap3.min
//= require jquery.share
//= require jquery.lazyload
//= require demoad
//= require gallery
//= require ios-orientationchange-fix
//= require jquery-slider
//= require jquery.colorbox-min
//= require jquery.easing.min
//= require jquery.elastislide
//= require jquery.flexisel
//= require jquery.imagesloaded
//= require jquery.magnific-popup
//= require jquery.mixitup.min
//= require jquery.swipebox.min
//= require jquery.tmpl.min
//= require jquery.wmuSlider
//= require jquery.wookmark
//= require modernizr.custom.min

$(document).ready(function() {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
    });
  });

(function ($){
$('#tiles').imagesLoaded(function() {
  // Prepare layout options.
  var options = {
    autoResize: true, // This will auto-update the layout when the browser window is resized.
    container: $('#main1'), // Optional, used for some extra CSS styling
    offset: 2, // Optional, the distance between grid items
    itemWidth:200 // Optional, the width of a grid item
  };

    // Get a reference to your grid items.
    var handler = $('#tiles li');

    // Call the layout function.
    handler.wookmark(options);

    // Init lightbox
    $('a', handler).colorbox({
      rel: 'lightbox'
    });
  });
})(jQuery);

$(window).load(function() {
$("#flexiselDemo1").flexisel();
$("#flexiselDemo2").flexisel({
  enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      portrait: {
        changePoint:480,
        visibleItems: 1
      },
      landscape: {
        changePoint:640,
        visibleItems: 2
      },
      tablet: {
        changePoint:768,
        visibleItems: 3
      }
    }
  });

$("#flexiselDemo3").flexisel({
  visibleItems: 5,
  animationSpeed: 1000,
  autoPlay: true,
  autoPlaySpeed: 3000,
  pauseOnHover: true,
  enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      portrait: {
        changePoint:480,
        visibleItems: 1
      },
      landscape: {
        changePoint:640,
        visibleItems: 2
      },
      tablet: {
        changePoint:768,
        visibleItems: 3
      }
    }
  });

tree
});
$('.example1').wmuSlider();
