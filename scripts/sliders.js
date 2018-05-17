(function() {
    // Слайдер с нашими работами
    var jobsSliderMain = $('.projects-gallery-main__list');
    var jobsSliderSecond = $('.projects-gallery-nav__list');
    if (jobsSliderMain) {
        $(jobsSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            infinite: true,
            useTransform: true,
            draggable: false,
            speed: 200
        });

        jobsSliderSecond
            .on('init', function (event, slick) {
                $('.projects-gallery-nav .slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                asNavFor: '.projects-gallery-main__list',
                infinite: true,
                arrows: true,
                centerMode: true,
                centerPadding: '0'
            });


        var removeAnimateSlide = function ($contentSlider) {
            var $animations = $contentSlider.find('.animated');
            $animations.removeClass('go');
        };
        var animateSlide = function ($contentSlider) {
            $contentSlider.find('.slick-current .animated').addClass('go')
        };

        // Свойства и методы слайдера с алгоритмом реализации
        jobsSliderMain.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $(currentSlide).removeClass('slick-current');
            removeAnimateSlide(jobsSliderMain);
        });

        jobsSliderMain.on('afterChange', function (slick, currentSlide) {
            animateSlide(jobsSliderMain);
            $(currentSlide).addClass('slick-current');
        });
    }


    // Слайдер с алгоритмом реализации
    var algorithmSliderSecond = $('.algorithm-tabs-nav');
    var algorithmSliderMain = $('.algorithm-tabs-main__list');
    if (algorithmSliderMain) {
        $(algorithmSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            infinite: false,
            useTransform: true,
            draggable: false,
            speed: 200
            // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)'
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

        // Свойства и методы слайдера с алгоритмом реализации
        algorithmSliderMain.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            removeAnimateSlide(algorithmSliderMain);
        });

        algorithmSliderMain.on('afterChange', function(event, slick, currentSlide) {
            algorithmSliderSecond.slick('slickGoTo', currentSlide);
            animateSlide(algorithmSliderMain);
        });

        algorithmSliderSecond.on('click', '.slick-slide', function(event) {
            event.preventDefault();
            // Получаем позиции активного элемента и кликнутого
            var goToElementState = $(this).data('slick-index');
                algorithmSliderMain.slick('slickGoTo', goToElementState);
                $('.algorithm-tabs-nav .is-active').removeClass('is-active');
                $(this).addClass('is-active');
        });

    }

}());
