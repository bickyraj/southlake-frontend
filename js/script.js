  $('[data-fancybox]').fancybox({
      youtube: {
          controls: 0,
          showinfo: 0
      },
      vimeo: {
          color: 'f00'
      }
  });
  wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: false, // default
      live: true // default
  })
  wow.init();

  /*  $('.dropdown').on('show.bs.dropdown', function(){
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function(e){
      e.preventDefault();
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
          $(this).closest('.dropdown').removeClass('open');
          $(this).closest('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
      });
  });*/


  $('.owl-carousel.banner-slider').owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 1,
              nav: false
          },
          1000: {
              items: 1,
              nav: false,
              loop: false
          }
      }
  })
  $('.owl-carousel.departments-slider').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 3,
              nav: false
          },
          1000: {
              items: 3,
              nav: false
          }
      }
  })
  $('.owl-carousel.testimonials-slider').owlCarousel({
      loop: false,
      margin: 0,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              autoHeight: true,
              nav: true
          },
          600: {
              items: 1,
              nav: false
          },
          1000: {
              items: 1,
              nav: true,
              loop: false
          }
      }
  })
  $('.owl-carousel.accreditations-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 3,
              nav: true
          },
          1000: {
              items: 3,
              nav: true
          }
      }
  })
  $(document).ready(function($) {
      //Check if an element was in a screen
      function isScrolledIntoView(elem) {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          var elemBottom = elemTop + $(elem).height();
          return ((elemBottom <= docViewBottom));
      }
      //Count up code
      function countUp() {
          $('.counter').each(function() {
              var $this = $(this), // <- Don't touch this variable. It's pure magic.
                  countTo = $this.attr('data-count');
              ended = $this.attr('ended');

              if (ended != "true" && isScrolledIntoView($this)) {
                  $({ countNum: $this.text() }).animate({
                      countNum: countTo
                  }, {
                      duration: 2500, //duration of counting
                      easing: 'swing',
                      step: function() {
                          $this.text(Math.floor(this.countNum));
                      },
                      complete: function() {
                          $this.text(this.countNum);
                      }
                  });
                  $this.attr('ended', 'true');
              }
          });
      }
      //Start animation on page-load
      if (isScrolledIntoView(".counter")) {
          countUp();
      }
      //Start animation on screen
      $(document).scroll(function() {
          if (isScrolledIntoView(".counter")) {
              countUp();
          }
      });
  });

    $('.nav-opener').click(function(e) {
      e.preventDefault();
      $('body').toggleClass('nav-active');

      $(this).siblings('.drop').slideToggle();


      if ($(window).width() < 1025) {
          $('.menu-item-has-children > a').remove('.arrow').append('<span class="arrow">arrow</arrow>');
      }

      $('.menu-item-has-children .arrow').click(function() {
          $(this).parents('li').toggleClass('open');
          $(this).parents('a').siblings('ul').slideToggle();
      })
  });
$(document).ready(function(){

    var highestBox = 0;
        $('.blog .blog-content').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height();  
        }
    });    
    $('.blog .blog-content').height(highestBox);

});