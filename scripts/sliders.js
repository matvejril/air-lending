(function() {

    var removeAnimateSlide = function ($contentSlider) {
        var $animations = $contentSlider.find('.animated');
        $animations.removeClass('go');
    };
    var animateSlide = function ($contentSlider) {
        $contentSlider.find('.slick-current .animated').addClass('go')
    };

    // Слайдер с нашими работами
    var jobsSliderMain = $('.projects-gallery-main__list');
    var $jobsSliderNav = $('.projects-gallery-nav__list');
    if (jobsSliderMain) {

        jobsSliderMain.on("init", function () {
            $('.projects-gallery').css("visibility", "visible");
        });

        $(jobsSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            infinite: true,
            useTransform: true,
            draggable: false,
            speed: 200,
            adaptiveHeight: true,
            swipe: false
        });

        $jobsSliderNav.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: true,
            asNavFor: '.projects-gallery-main__list',
            infinite: true,
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true
                    }
                }
            ]
        });


        // Свойства и методы слайдера с алгоритмом реализации
        jobsSliderMain.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            removeAnimateSlide(jobsSliderMain);
        });

        jobsSliderMain.on('afterChange', function (slick, currentSlide) {
            animateSlide(jobsSliderMain);
        });
    }






    // Слайдер с алгоритмом реализации
    var $algorithmSliderNav = $('.algorithm-tabs-nav');
    var $algorithmSliderMain = $('.algorithm-tabs-main__list');


    // var wid = $(window).width();

    if ($algorithmSliderMain && $(window).width() >= 1006) {

        $algorithmSliderMain.on("init", function () {
            $('.algorithm-tabs').css("visibility", "visible");
        });

        $($algorithmSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            infinite: false,
            useTransform: true,
            draggable: false,
            speed: 200
        });

        $algorithmSliderNav.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: false,
            focusOnSelect: true,
            asNavFor: '.algorithm-tabs-main__list',
            settings: "slick",
            initialSlide: 0
        });


        var $algorithmNavItems = $(".algorithm-tabs-nav__item");

        // Свойства и методы слайдера с алгоритмом реализации
        $algorithmSliderMain.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            removeAnimateSlide($algorithmSliderMain);
        });

        $algorithmSliderMain.on('afterChange', function(event, slick, currentSlide) {
            animateSlide($algorithmSliderMain);

        });

        $algorithmSliderNav.on('click', '.slick-slide', function(event) {
            // Получаем позиции активного элемента и кликнутого
            $algorithmNavItems.removeClass('slick-current');
            $(this).addClass('slick-current');
        });
    }

    // reslick only if it's not slick()
    $(window).on('resize', function() {
        if ($(window).width() <= 1006) {
            if ($algorithmSliderMain.hasClass('slick-initialized')) {
                $algorithmSliderMain.slick('unslick');
            }
            if ($algorithmSliderNav.hasClass('slick-initialized')) {
                $algorithmSliderNav.slick('unslick');
            }
            return
        }

        if (!$algorithmSliderMain.hasClass('slick-initialized')) {
            return $algorithmSliderMain.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                dots: false,
                infinite: false,
                useTransform: true,
                draggable: false,
                speed: 200
            });
        }
        if (!$algorithmSliderNav.hasClass('slick-initialized')) {
            return $algorithmSliderNav.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                infinite: false,
                focusOnSelect: true,
                asNavFor: '.algorithm-tabs-main__list',
                settings: "slick",
                initialSlide: 0
            });
        }

    })


}());
