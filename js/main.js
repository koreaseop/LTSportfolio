$(function () {
    AOS.init();
});

$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표
        var scrollposition = $(window).scrollTop();
        var scrollposition_bottom = $(document).height() - $(window).height() - $(window).scrollTop();

        let Homesection = document.querySelector("#home").offsetTop;
        let Aboutsection = document.querySelector("#about").offsetTop;
        let Worksection = document.querySelector("#work").offsetTop;
        let Contactsection = document.querySelector("#contact").offsetTop;
        
        // home
        $(window).on('scroll', function () {
            if (scrollposition < Aboutsection) {
                $('.idc-home').addClass('on');
            } else {
                $('.idc-home').removeClass('on');
            };
        });
        // about
        $(window).on('scroll', function () {
            if (Aboutsection <= scrollposition + 10) {
                $('.idc-about').addClass('on');
                $('.idc-home').removeClass('on');
            } else {
                $('.idc-about').removeClass('on');
            };
        });
        
        // work
        $(window).on('scroll', function () {
            if (Worksection <= scrollposition + 20) {
                $('.idc-work').addClass('on');
                $('.idc-about').removeClass('on');
            } else {
                $('.idc-work').removeClass('on');
            };
        });
        // contact
        $(window).on('scroll', function () {
            if (1800 <= scrollposition) {
                $('.idc-contact').addClass('on');
                $('.idc-work').removeClass('on');
            } else {
                $('.idc-contact').removeClass('on');
            };
        });


    });
});

//swiper
$(function(){
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },   
        
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      });
});

