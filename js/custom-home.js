
(function ($) {
  "use strict";
  
    /*===========================================
      =            Windows Load          =
    =============================================*/
    $(window).on('load', function () {
      // preloader();
      aosAnimation();
    });

    /*===========================================
      =            Preloader          =
    =============================================*/
    // function preloader() {
    //   $('#preloader').delay(2000).fadeOut();
    // };

    /*===========================================
      =        Navbar fixed on scroll       =
    =============================================*/
    $(window).on('scroll', function(){
      let scroll = $(window).scrollTop();
      if(scroll < 200) {
        $('.navbar').removeClass('fixed-top');
      }
      else {
        $('.navbar').addClass('fixed-top');
      }
    });

    /*===========================================
      = mega menu items in mobile show & hide =
    =============================================*/
    if ($(window).width() < "992") {
      $(".mega_menu_title").click(function () {
        $(this)
          .toggleClass("active")
          .next(".mega_menu_tab")
          .slideToggle()
          .parents().eq(1)
          .siblings()
          .find(".mega_menu_tab")
          .slideUp()
          .prev()
          .removeClass("active");
      });
      // $(".mega_menu_list_item").click(function () {
      //   $(this)
      //     .toggleClass("active")
      //     .children(".mega_menu_child")
      //     .slideToggle()
      //     .parents().eq(0)
      //     .siblings()
      //     .find(".mega_menu_child")
      //     .slideUp()
      //     .prev()
      //     .removeClass("active");
      // });
    }
    // let elements = document.querySelectorAll(".rolling-text");
    // elements.forEach((element) => {
    //     let innerText = element.innerText;
    //     element.innerHTML = "";
    //     let textContainer = document.createElement("div");
    //     textContainer.classList.add("block");
    //     for (let letter of innerText) {
    //         let span = document.createElement("span");
    //         span.innerText = letter.trim() === "" ? "\xa0" : letter;
    //         span.classList.add("letter");
    //         textContainer.appendChild(span);
    //     }
    //     element.appendChild(textContainer);
    //     element.appendChild(textContainer.cloneNode(true));
    // });
    // elements.forEach((element) => {
    //     element.addEventListener("mouseover", () => {
    //         element.classList.remove("play");
    //     });
    // });

    /*===========================================
      =        Home Banner slider       =
    =============================================*/

    $('.home_banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 800,
        autoplay: true,
        infinite: true,
        loop: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
				        dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                }
            },
          ]
        });

        /*===========================================
          =        Home Banner slider       =
        =============================================*/

        $('.growth_slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          speed: 1500,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          loop: true,
          fade: true,
          cssEase: 'linear',
          prevArrow: $('.prev-arrow'),
          nextArrow: $('.next-arrow'),
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  }
              },
              {
                  breakpoint: 767,
                  settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  }
              },
            ]
          });

          /*===========================================
          =        services tabbing       =
          =============================================*/
          if($(document).width() > 991) {
          $('.services-a').click(function(){  
            $(".tab-services").removeClass('tab-active');
            $(".tab-services[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
            $(".services-a").removeClass('active-a');
            $(this).parent().find(".services-a").addClass('active-a');
           });

           $('.servies_left_tab a[data-toggle="tab"]').on('click', function (e) {
            $('.expertise_slider').slick('refresh');
            $('.expertise_slider').slick('setPosition');
           
            });
          }
          if($(document).width() < 991) {
            console.log("run");
            $('.services-a').click(function(){  
              $(".tab-services").removeClass('tab-active');
              $(".tab-services[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".services-a").removeClass('active-a');
              $(this).addClass('active-a');
              $('.expertise_slider').slick('refresh');
             });
          }

        /*===========================================
          =        technology logo slider       =
        =============================================*/
        
          $(".expertise_slider").slick({ 
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              speed: 300,
              infinite: true,
              autoplaySpeed: 3000,
              autoplay: true,
              loop: true,
              draggable: true,
              prevArrow: '<a class="exprev-arrow" href="javascript:void(0);"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4181 16.0026C18.4174 16.1422 18.4447 16.2805 18.4982 16.4095C18.5517 16.5384 18.6304 16.6553 18.7298 16.7534L25.0623 23.0859L18.7723 29.4184C18.6428 29.6181 18.5841 29.8555 18.6056 30.0925C18.6272 30.3295 18.7276 30.5525 18.8909 30.7256C19.0542 30.8987 19.2709 31.0119 19.5063 31.0472C19.7417 31.0825 19.9821 31.0377 20.1889 30.9201L27.2723 23.8368C27.4712 23.6376 27.583 23.3675 27.583 23.0859C27.583 22.8044 27.4712 22.5343 27.2723 22.3351L20.1889 15.2518C19.9897 15.0528 19.7197 14.941 19.4381 14.941C19.1565 14.941 18.8865 15.0528 18.6873 15.2518C18.5021 15.4568 18.4054 15.7266 18.4181 16.0026Z"fill="curentColor"/></svg></a>',
              nextArrow: '<a class="exnext-arrow" href="javascript:void(0);"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4181 16.0026C18.4174 16.1422 18.4447 16.2805 18.4982 16.4095C18.5517 16.5384 18.6304 16.6553 18.7298 16.7534L25.0623 23.0859L18.7723 29.4184C18.6428 29.6181 18.5841 29.8555 18.6056 30.0925C18.6272 30.3295 18.7276 30.5525 18.8909 30.7256C19.0542 30.8987 19.2709 31.0119 19.5063 31.0472C19.7417 31.0825 19.9821 31.0377 20.1889 30.9201L27.2723 23.8368C27.4712 23.6376 27.583 23.3675 27.583 23.0859C27.583 22.8044 27.4712 22.5343 27.2723 22.3351L20.1889 15.2518C19.9897 15.0528 19.7197 14.941 19.4381 14.941C19.1565 14.941 18.8865 15.0528 18.6873 15.2518C18.5021 15.4568 18.4054 15.7266 18.4181 16.0026Z"fill="curentColor"/></svg></a>',
              responsive: [
                    {
                      // breakpoint: 1500,
                      // settings: {
                      //     slidesToShow: 4,
                      //     slidesToScroll: 1,
                      //     centerMode: true,
                      // },
                  },
                  {
                      // breakpoint: 1400,
                      // settings: {
                      //     slidesToShow: 3,
                      //     slidesToScroll: 1,
                      //     centerMode: true,
                      // },
                  },
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1,
                          dots: false,
                      },
                  },
                  {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: false,
                    },
                },
                  {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                  breakpoint: 360,
                  settings: {
                      slidesToShow: 2,
                  },
              },
          
              ],
          });
        /*===========================================
          =        work section slider       =
        =============================================*/

        $('.banner-slider-new').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 300,
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            fade: true,
            cssEase: 'Linear',
            asNavFor: '.slider-nav',
        
             responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              dots: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              dots: true,
              fade: false,
            }
          }
        ]
          });
    
          var $slider = $('.slider-nav');
      var $progressBar = $('.progress');
      var $progressBarLabel = $( '.slider__label' );
      
      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        
        $progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        $progressBarLabel.text( calc + '% completed' );
      });
    
    
      var $counter = $('.slide-count');
    var $slider = $('.slider-nav');
    
    $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $counter.text('0' + i + '' );
    });
    
          $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.banner-slider-new',
            dots: true,
            focusOnSelect: true,
            autoplaySpeed: 3000,
            arrows: false,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  dots: false,
                }
              },
              {
                breakpoint: 767,
                settings: "unslick",
              },
            ]
          });
     
     $(".prev-btn").click(function () {
            $(".slider-nav").slick("slickPrev");
        });
    
        $(".next-btn").click(function () {
            $(".slider-nav").slick("slickNext");
        });


           $('.work-a').click(function(){  
            $(".tab-work").removeClass('tab-active');
            $(".tab-work[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
            $(".work-a").removeClass('active-a');
            $(this).parent().find(".work-a").addClass('active-a');
           });

           $('.work-tab-top a[data-toggle="tab"]').on('click', function (e) {
            $('.banner-slider-new, .slider-nav').slick('setPosition');
            });

           $(".clients_slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                speed: 300,
                centerMode: true,
                centerPadding: "0px",
                infinite: true,
                autoplaySpeed: 3000,
                autoplay: true,
                fade: true,
                cssEase: 'linear',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            dots: true,
                        },
                    },
                    // {
                    //     breakpoint: 480,
                    //     settings: {
                    //         slidesToShow: 1,
                    //         centerMode: false,
                    //         dots: false,
                    //     },
                    // },
            
                ],
            });

            $(".client_person_slider").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
              speed: 2000,
              infinite: true,
              autoplaySpeed: 5000,
              autoplay: true,
              fade: true,
              cssEase: 'linear',
              responsive: [
                  {
                      breakpoint: 768,
                      settings: {
                          arrows: true,
                          // dots: true,
                          slidesToShow: 1,
                      },
                  },
          
              ],
          });

           $(".industry_slider").slick({
            centerMode: true,
            centerPadding: "0px",
            // variableWidth: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 1000,
            autoplay: true,
            infinite: true,
            loop: true,
            prevArrow: $('.sprev-arrow'),
            nextArrow: $('.snext-arrow'),
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    // centerPadding: "px",
                    // variableWidth: false,
                },
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      arrows: false,
                      // centerPadding: "px",
                      // variableWidth: false,
                  },
              },
      
          ],
          });

    /*===========================================
      =           Footer list accordion       =
    =============================================*/
    // currently not using
    // $(window).resize(function(e){
    //   if($(window).width() <= 767) {
    //     $(".footer_list").on('click', function(){
    //       if($(this).hasClass('active')) {
    //         $(this).siblings('.custom_accordion').slideUp();
    //         $(this).removeClass('active');
    //       }
    //       else {
    //         $('.custom_accordion').slideUp();
    //         $('.footer_list').removeClass('active');
    //         $(this).siblings('.custom_accordion').slideToggle();
    //         $(this).toggleClass('active');
    //       }
    //     });
    //   }
    // });
    // $(window).resize();

    /*===========================================
      =           Aos Active       =
    =============================================*/
    function aosAnimation() {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        mirror: true,
        once: false,
      });
    }

   


})(jQuery);