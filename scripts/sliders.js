(function() {
    var jobsSliderMain = $('.projects-gallery-main__list');
    var jobsSliderSecond = $('.projects-gallery-nav');
    if (jobsSliderMain) {
        $(jobsSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: false,
            infinite: true,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)'
        });

        jobsSliderSecond
            .on('init', function(event, slick) {
                $('.projects-gallery-nav .slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: false,
                focusOnSelect: false,
                infinite: true
            });
    }

    jobsSliderMain.on('afterChange', function(event, slick, currentSlide) {
        jobsSliderMain.slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.projects-gallery-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.projects-gallery-nav .is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    jobsSliderSecond.on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        jobsSliderMain.slick('slickGoTo', goToSingleSlide);
    });


    var algorithmSliderSecond = $('.algorithm-tabs-nav');
    var algorithmSliderMain = $('.algorithm-tabs-main__list');
    if (algorithmSliderMain) {
        $(algorithmSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: false,
            infinite: false,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)'
        });

        algorithmSliderSecond
            .on('init', function(event, slick) {
                $('.algorithm-tabs-nav .slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: false,
                dots: false,
                infinite: false,
                focusOnSelect: false
            });
    }
    algorithmSliderMain.on('afterChange', function(event, slick, currentSlide) {
        algorithmSliderSecond.slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.algorithm-tabs-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.algorithm-tabs-nav .is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    algorithmSliderSecond.on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        algorithmSliderMain.slick('slickGoTo', goToSingleSlide);
    });


}());
