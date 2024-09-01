
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
        $(".mm_title").click(function () {
          $(this)
            .toggleClass("active")
            .next(".mm_tab")
            .slideToggle()
            .parent()
            // .parents().eq(0)
            .siblings()
            .find(".mm_tab")
            .slideUp()
            .prev()
            .removeClass("active");
            $(this).prev().toggleClass("active").parent().siblings().find(".nav-link").removeClass("active");
        });
        $(".mega_menu_title").click(function () {
          $(this)
            .toggleClass("active")
            .next(".mega_menu_tab")
            .slideToggle()
            .parents()
            // .parents().eq(0)
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
        draggable: true,
        responsive: [
              {
                breakpoint: 5000,
                settings: "unslick",
            },
            // {
            //     breakpoint: 1200,
            //     settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //             dots: false,
            //     }
            // },
            // {
            //     breakpoint: 767,
            //     settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //     autoplay: true,
            //     infinite: true,
            //     }
            // },
          ]
        });
          /*===========================================
            =        video play on click thumbnail    =
          =============================================*/
          // $(".play_btn").on("click", function () {
          //   console.log("run");
          //   let vidSrc = $(this).siblings("iframe");
          //   let coverBg = $(this).siblings(".video_thumbnail");
          //   vidSrc.trigger("play");
          //   coverBg.hide();
          //   $(this).hide();
          // });

          $('.popup-video').magnificPopup({
            // type:'inline',
            // midClick: true,
            type: 'iframe'
          });
  
          /*===========================================
            =        growth slider       =
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
            draggable: true,
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
            $('.tab_btn').click(function(){  
              $(".tab-services").removeClass('tab-active');
              $(".tab-services[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".tab_btn").removeClass('active');
              $(this).parent().find(".tab_btn").addClass('active');
             });
  
             $('.tab_btn').on('click', function (e) {
              $('.expertise_slider').slick('refresh');
              $('.expertise_slider').slick('setPosition');
             
              });
            }
            if($(document).width() < 991) {
              $('.tab_btn').click(function(){  
                $(".tab-services").removeClass('tab-active');
                $(".tab-services[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
                $(".tab_btn").removeClass('active');
                $(this).addClass('active');
                $('.expertise_slider').slick('refresh');
               });
            }

            $(".sa_title").click(function () {
              $(this)
                .toggleClass("active")
                .next(".sa_tab")
                .slideToggle(1000)
                .parent()
                .siblings()
                .find(".sa_tab")
                .slideUp(1000)
                .prev()
                .removeClass("active");
                $('.expertise_slider').slick('refresh');
            });
  
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
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
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
              draggable: true,
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
              draggable: true,
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
  
  
             $('.work_tab').click(function(){  
              $(".tab-work").removeClass('tab-active');
              $(".tab-work[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".work_tab").removeClass('active');
              $(this).parent().find(".work_tab").addClass('active');
             });
  
             $('.work_tab').on('click', function (e) {
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
                  draggable: true,
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
                draggable: true,
                prevArrow: $('.cp-prev-arrow'),
                nextArrow: $('.cp-next-arrow'),
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            dots: true,
                            arrows: true,
                            slidesToShow: 1,
                            
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            dots: true,
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
              draggable: true,
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
          easing: 'ease',
          mirror: true,
          once: false,
        });
      }
      
      /*===========================================
        =           About us page      =
      =============================================*/
      $(".about_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                    centerMode: false,
                    dots: false,
                },
            },
    
        ],
    });
      
      /*===========================================
      =      Counter Odometer Active    =
      =============================================*/
      $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });

      // Counter section script  end
      
      /*===========================================
        =           team card slider      =
      =============================================*/
      $(".team-card-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        draggable: true,
        prevArrow: $('.tc-prev-arrow'),
        nextArrow: $('.tc-next-arrow'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
    
        ],
    });

      if($(document).width() < 1200) {
        $(".team_circle a").on("click", function (){
          $(this).parents().eq(1).find('.content-team-card').addClass("active")
        });
        $(".inner_team_circle a").on("click", function (){
          $(".team_card .content-team-card").removeClass("active");
      });
      }
      
      /*===========================================
        =           service blogs slider       =
      =============================================*/

      $(".service_blogs_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
        infinite: true,
        loop: true,
        autoplaySpeed: 2000,
        autoplay: true,
        draggable: true,
        prevArrow: $('.sb-prev-arrow'),
        nextArrow: $('.sb-next-arrow'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
           
    
        ],
    });
      
      /*===========================================
        =           tech blogs slider       =
      =============================================*/
      $(".tech_blogs_slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
        infinite: true,
        loop: true,
        autoplaySpeed: 2000,
        autoplay: true,
        draggable: true,
        prevArrow: $('.tb-prev-arrow'),
        nextArrow: $('.tb-next-arrow'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: false,
              },
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true,
              },
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true,
              },
            },
           
    
        ],
    });
     
      /*===========================================
        =           approach tab section       =
      =============================================*/
      $('.tech_tab').click(function(){  
        $(".tech_tab_detail").removeClass('tab-active');
        $(".tech_tab_detail[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".tech_tab").removeClass('active');
        $(this).parent().find(".tech_tab").addClass('active');
      });

      /*===========================================
        =           media tab section          =
      =============================================*/
      $('.media_tab').click(function(){  
        $(".media_tab_detail").removeClass('tab-active');
        $(".media_tab_detail[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".media_tab").removeClass('active');
        $(this).parent().find(".media_tab").addClass('active');
      });

      /*===========================================
        =           blog listing tab          =
      =============================================*/
      $('.bl_tab').click(function(){  
        $(".bl_tab_detail").removeClass('tab-active');
        $(".bl_tab_detail[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".bl_tab").removeClass('active');
        $(this).parent().find(".bl_tab").addClass('active');
      });
      
      
      /*======================================================================
        =           design approach card change to slider in mobile          =
      ========================================================================*/
        if($(document).width() < 768) {
          $('.card_thinking').wrapAll('<div class="card_thinking_slider"></div>');
        }
        $(".card_thinking_slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          speed: 2000,
          infinite: true,
          loop: true,
          autoplaySpeed: 4000,
          autoplay: true,
          draggable: true,
        });

        /*===========================================
        =           ai page horizontal accordion    =
        =============================================*/

        const choiceArray = document.querySelectorAll(".accordion1");
        choiceArray.forEach((card) => {
          card.addEventListener("click", () => {
            choiceArray.forEach((element) => {
              element.classList.remove("expand", "unset");
              element.classList.add("small");
            });
            card.classList.remove("small");
            card.classList.add("expand");
          });
        });
        
        /*===========================================
        =          ai page accordion mobile         =
        =============================================*/

        $(".accordion_title").click(function () {
          $(this)
            .toggleClass("active")
            .next(".accordion_tab")
            .slideToggle()
            .parent()
            .siblings()
            .find(".accordion_tab")
            .slideUp()
            .prev()
            .removeClass("active");
        });

        /*=========================================================
        =           mobile fixed menu active on click              =
        ===========================================================*/
        const handleMenubarNav = function () {
        $(".mobile_fixed_menu ul li a").on("click", function() {
          $(".mobile_fixed_menu ul li a").removeClass("active");
          $(this).addClass("active");
        });
        }
        handleMenubarNav ();

        /*===========================================
        =          ai page accordion mobile         =
        =============================================*/
        
        // if($(document).width() > 768) {
        //   $(window).on("scroll", function() {
        //     let scroll = $(window).scrollTop();
        //     if (scroll > 550) {
        //       $(".category_filter").addClass("top-fix")
        //     }
        //     else {
        //       $(".category_filter").removeClass("top-fix")
        //     }
        //   });
        // }

        // const categoryMenu = function () {
        //   $(".category-btn").on("click", function(){
        //     $(".category_filter").toggleClass("show");
        //     $(this).toggleClass("active")
        //   });
        // }
        // categoryMenu ();

        function scrollToSection(e) {
          e.preventDefault();
          var $section = $($(this).attr('href')); 
          $('html, body').animate({
            scrollTop: $section.offset().top - 100
          }, 200);
        }
        $('[data-scroll]').on('click', scrollToSection);

        /*===========================================
        =           career growth slider       =
        =============================================*/
        $(".career_growth_slider").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          speed: 1000,
          infinite: true,
          loop: true,
          autoplaySpeed: 2000,
          autoplay: true,
          draggable: true,
          prevArrow: $('.cg-prev-arrow'),
          nextArrow: $('.cg-next-arrow'),
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
              },
            
      
          ],
      });

      /*===========================================
        =           work page tab          =
      =============================================*/
      $('.work_tab').click(function(){  
        $(".work_tab_detail").removeClass('tab-active');
        $(".work_tab_detail[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".work_tab").removeClass('active');
        $(this).parent().find(".work_tab").addClass('active');
      });
      
      /*==================================================
        =           our team page client slider          =
      ====================================================*/
      $(".our_client_slider").slick({
          slidesToShow: 9,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          speed: 4000,
          infinite: true,
          autoplaySpeed: 1500,
          autoplay: true,
          draggable: true,
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 7,
                      slidesToScroll: 1,
                  },
              },
              {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
              },
              {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            
      
          ],
      });

      /*==========================================================
        =           our team page client slider reverse          =
      ===========================================================*/
      
      $(".our_client_slider_rtl").slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        rtl: true,
        dots: false,
        speed: 4000,
        infinite: true,
          autoplaySpeed: 2000,
          autoplay: true,
          responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 7,
                          slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 991,
                      settings: {
                          slidesToShow: 6,
                          slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1,
                      },
                    },
                  
                  
                ],
              });
      /*==========================================================
        =           slider image convert to bg image          =
      ===========================================================*/
      $('.bg-img').each(function () {
        var el = $(this),
        src = el.attr('src'),
        parent = el.parent();
        parent.css({
          'background-image': 'url(' + src + ')',
          'background-size': 'cover',
          'background-position': '50% 45%',
          'background-repeat': 'no-repeat',
        });
        el.hide();
      });

      if ($(document).width() < 768) {
        $('.bg_img_mobile').each(function () {
          var el = $(this),
          src = el.attr('src'),
          parent = el.parent().parent();
          parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'contain',
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat',
          });
          el.hide();
        });
      }
      else {
        $('.bg_img_desktop').each(function () {
          var el = $(this),
          src = el.attr('src'),
          parent = el.parent().parent();
          parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'contain',
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat',
          });
          el.hide();
        });
      }
      
      /*===============================================
        =           magnificPopup video view          =
      =================================================*/
      
      // $('.popup-video').magnificPopup({
      //   type: 'iframe'
      // });
      
      /*====================================================
        =        happy client slider         =
        ====================================================*/

        $(".happy_client_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 1000,
            infinite: true,
            loop: true,
            autoplaySpeed: 2000,
            autoplay: true,
            draggable: true,
            prevArrow: $('.hc-prev-arrow'),
            nextArrow: $('.hc-next-arrow'),
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  },
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  },
                  breakpoint: 575,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  },
                },
              
        
            ],
        });

        /*====================================================
        =        developer work slider         =
        ====================================================*/

        $(".developer_work_slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          speed: 1000,
          infinite: true,
          loop: true,
          autoplaySpeed: 2000,
          autoplay: true,
          draggable: true,
          prevArrow: $('.dw-prev-arrow'),
          nextArrow: $('.dw-next-arrow'),
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
              },
            
      
          ],
      });
      /*====================================================
        =        hire developer page faq accordion         =
        ====================================================*/

        $(".faq_accordion > .accordion_title").click(function () {
          $(this)
            .toggleClass("active")
            .next(".accordion_tab")
            .slideToggle()
            .parent()
            .siblings()
            .find(".accordion_tab")
            .slideUp()
            .prev()
            .removeClass("active");
        });



  })(jQuery);