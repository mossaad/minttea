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

    //hide navbar collaps on click on page
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
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


    //stop independence video on modale hide
    $('#independence').on('hide.bs.modal', () => {
        $('#independence-player').attr('src', '');
        $('#independence-player').attr('src', 'https://www.youtube.com/embed/FzFR1E97OP4');
    });

    //stop independence video on page hidden
    document.addEventListener("visibilitychange", function() {
        // console.log(document.visibilityState);
        // console.log(document.hidden);
        if(document.hidden){
            $('#independence-player').attr('src', '');
        }else{
            $('#independence-player').attr('src', 'https://www.youtube.com/embed/FzFR1E97OP4');
        }
    });

    //stop forest video on modale hide
    $('#forest').on('hide.bs.modal', () => {
        $('#forest-player').attr('src', '');
        $('#forest-player').attr('src', 'https://www.youtube.com/embed/JW5KRm0XakE');
    });

    //stop forest video on page hidden
    document.addEventListener("visibilitychange", function() {
        // console.log(document.visibilityState);
        // console.log(document.hidden);
        if(document.hidden){
            $('#forest-player').attr('src', '');
        }else{
            $('#forest-player').attr('src', 'https://www.youtube.com/embed/JW5KRm0XakE');
        }
    });

    //Pause carousal on video
    $('#independence').on('show.bs.modal', ()=> {
        console.log('yes')
        $('#independenceCaptions').on('slide.bs.carousel', function onSlide (ev) {
            var id = ev.relatedTarget.id;
            switch (id) {
                case "independence-video":
                console.log('video')
                $("#independenceCaptions").carousel("pause");
                break;
            //   case "2":
            //     // do something the id is 2
            //     break;
            //   case "3":
            //     // do something the id is 3
            //     break;
            //   default:
            //     //the id is none of the above
            }
        });
    });

    $('#forest').on('show.bs.modal', ()=> {
        $('#forestCaptions').on('slide.bs.carousel', function onSlide (ev) {
            var id = ev.relatedTarget.id;
            switch (id) {
                case "forest-video":
                $("#forestCaptions").carousel("pause");
                break;
            }
        });
    });

});
