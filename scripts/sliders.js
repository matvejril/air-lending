(function() {
    var sliderMain = $('.projects-gallery-main__list');
    var sliderSecond = $('.projects-gallery-nav');
    if (sliderMain) {
        $(sliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: false,
            infinite: false,
            useTransform: true,
            speed: 400,
            // centerMode: true,
            // centerPadding: '100px',
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)'
        });

        sliderSecond
            .on('init', function(event, slick) {
                $('.projects-gallery-nav .slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: false,
                focusOnSelect: false,
                infinite: false
            });
    }

    sliderMain.on('afterChange', function(event, slick, currentSlide) {
        sliderSecond.slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.projects-gallery-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.projects-gallery-nav .is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    sliderSecond.on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        sliderMain.slick('slickGoTo', goToSingleSlide);
    });



}());
