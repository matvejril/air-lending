var removeAnimateSlide = function ($contentSlider) {
    var $animations = $contentSlider.find('.animated');
    $animations.removeClass('go');
};
var animateSlide = function ($contentSlider) {
    $contentSlider.find('.slick-current .animated').addClass('go')
};


// Слайдер с нашими работами
var projectsSlider = (function() {

    var $projectsSliderMain = $('.projects-gallery-main__list');
    var $projectsSliderNav = $('.projects-gallery-nav__list');
    var sliderMainSettings = {
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
    };
    var sliderNavSettings = {
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
    };

    $projectsSliderMain.on("init", function () {
        $('.projects-gallery').css("visibility", "visible");
    });
    $projectsSliderMain.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        removeAnimateSlide($projectsSliderMain);
    });
    $projectsSliderMain.on('afterChange', function (slick, currentSlide) {
        animateSlide($projectsSliderMain);
    });

    $projectsSliderMain.slick(sliderMainSettings);
    $projectsSliderNav.slick(sliderNavSettings);
});


// Слайдер с алгоритмом реализации
var algorithmSlider = (function() {

    var $algorithmSliderNav = $('.algorithm-tabs-nav');
    var $algorithmSliderMain = $('.algorithm-tabs-main__list');
    var $algorithmNavItems = $(".algorithm-tabs-nav__item");

    var sliderMainSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        infinite: false,
        useTransform: true,
        draggable: false,
        speed: 200
    };

    var sliderNavSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        asNavFor: '.algorithm-tabs-main__list',
        settings: "slick",
        initialSlide: 0
    };

    $algorithmSliderMain.on("init", function () {
        $('.algorithm-tabs').css("visibility", "visible");
    });
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


    $algorithmSliderMain.slick(sliderMainSettings);
    $algorithmSliderNav.slick(sliderNavSettings);


    
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
            return $algorithmSliderMain.slick(sliderMainSettings);
        }
        if (!$algorithmSliderNav.hasClass('slick-initialized')) {
            return $algorithmSliderNav.slick(sliderNavSettings);
        }
    });
});


exports.projectsSlider = projectsSlider;
exports.algorithmSlider = algorithmSlider;