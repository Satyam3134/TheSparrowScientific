(function ($) {
    "use strict";
    /*===========================================
        =            Windows Load          =
    =============================================*/
    $(window).on('load', function () {
        aosAnimation();
    });

    /*===========================================
      =        Navbar fixed on scroll       =
    =============================================*/
    $(window).on('scroll', function(){
        let scroll = $(window).scrollTop();
        if(scroll < 600) {
          $('.navbar').removeClass('fixed-top');
        }
        else {
          $('.navbar').addClass('fixed-top');
        }
      });
  
      /*===========================================
        =        Hover text animation       =
      =============================================*/
    //   let elements = document.querySelectorAll(".rolling-text");
    //   elements.forEach((element) => {
    //       let innerText = element.innerText;
    //       element.innerHTML = "";
    //       let textContainer = document.createElement("div");
    //       textContainer.classList.add("block");
    //       for (let letter of innerText) {
    //           let span = document.createElement("span");
    //           span.innerText = letter.trim() === "" ? "\xa0" : letter;
    //           span.classList.add("letter");
    //           textContainer.appendChild(span);
    //       }
    //       element.appendChild(textContainer);
    //       element.appendChild(textContainer.cloneNode(true));
    //   });
    //   elements.forEach((element) => {
    //       element.addEventListener("mouseover", () => {
    //           element.classList.remove("play");
    //       });
    //   });

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


$(".industry_slider").slick({
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  speed: 500,
  variableWidth: true,
  dots: false,
  arrows: true,
  autoplay: true,
  draggable: true,
});


$(".expertise-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: false,
    draggable: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2,
                centerMode: false,
            },
        },
       

    ],
});

    var getslide = $('.main-box li').length - 1;

var slidecal = 30/getslide+'%';

$('.box').css({"width": slidecal});

$('.box').click(function(){
    $('.box').removeClass('active');
   $(this).addClass('active');
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


// card section script start 

$(".team-card-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 3000,
    autoplay: false,
    draggable: true,
    prevArrow: $('.tc-prev-arrow'),
    nextArrow: $('.tc-next-arrow'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1.2,
            },
        },

    ],
});

// card section script start 
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

       // technoloy page tabbing
    $('.tech_tab').click(function(){  
        $(".tech_tab_detail").removeClass('tab-active');
        $(".tech_tab_detail[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".tech_tab").removeClass('active');
        $(this).parent().find(".tech_tab").addClass('active');
       });

    //    technology blog slider
       $(".tech_blogs_slider").slick({
        slidesToShow: 2.8,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
           
    
        ],
    });

    // Media page tabbing
    $('.media_tab').click(function(){  
        $(".media_tab_detail").removeClass('tab-active');
        $(".media_tab_detail[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".media_tab").removeClass('active');
        $(this).parent().find(".media_tab").addClass('active');
       });

    // our client slider
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
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
           
    
        ],
    });

    // our client slider rtl
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
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
           
    
        ],
    });

})(jQuery);
