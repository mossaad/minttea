$(document).ready(function () {
    "use strict";
    /*Start Navbar*/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    //Adjust header height
    $(".header").height($(window).height());

    $(window).resize(function() {
        $(".header").height($(window).height());
    });

    //scroll to nav link
    $(".navbar .navbar-nav a").on("click", function() {
        console.log($(this).data("class"));
        $("html, body").animate({
            scrollTop: $($(this).data("class")).offset().top- 150
        }, 1000);
    });

    //Scroll to About
    $(".header .chevron-down").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top - 170
        }, 1000);
    });

    
    //Scroll to top Icon
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $(".top-icon").fadeIn();
        } else {
            $(".top-icon").fadeOut();
        }
    });

    $(".top-icon").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });


    //Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        init: true,
        initialSlide:3,
        pagination: {
            el: '.swiper-pagination',
        },
    });    
});
