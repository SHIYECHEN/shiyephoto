$(function() {
    if ($(window).width() >= 700) {
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
})
