(function() {

    // Слайдер с нашими работами

    var jobsSliderMain = $('.projects-gallery-main__list');
    var jobsSliderSecond = $('.projects-gallery-nav');
    if (jobsSliderMain) {
        $(jobsSliderMain).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: false,
            infinite: true,
            useTransform: true,
            speed: 200,
            // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',

            cssEase: 'linear'
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
            speed: 200,
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


    var algorithmTabsNavItemAll = document.querySelectorAll('.algorithm-tabs-nav__item');

    algorithmSliderMain.on('afterChange', function(event, slick, currentSlide) {
        algorithmSliderSecond.slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.algorithm-tabs-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.algorithm-tabs-nav .is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    algorithmSliderMain.on("beforeChange", function(event, slick, currentSlide) {
        var algorithmTabsNavItem = algorithmTabsNavItemAll[currentSlide];

        var algorithmTabsNavItemHasClass = algorithmTabsNavItem.classList.contains('algorithm-tabs-nav__item_visited');
        if (!algorithmTabsNavItemHasClass) {
            algorithmTabsNavItem.classList.add('algorithm-tabs-nav__item_visited')
        }
    });

    var maxState = 0;
    algorithmSliderSecond.on('click', '.slick-slide', function(event) {
        event.preventDefault();

        // Получаем позиции активного элемента и кликнутого
        var activeElementState = $('.algorithm-tabs-nav').find('.is-active').index();
        var goToElementState = $(this).data('slick-index');


        console.log("activeElementState", activeElementState, "goToSingleSlide", goToElementState);

        if (activeElementState + 1 >= goToElementState || maxState >= goToElementState) {
            algorithmSliderMain.slick('slickGoTo', goToElementState);

            if (maxState < goToElementState) {
                maxState = goToElementState;
            }

        }



        console.log(goToSingleSlide);


        // for (var e = 0; e < algorithmTabsNavItemAll.length; e++) {
        //     if (elementIndex === algorithmTabsNavItemAll[e]) {
        //
        //     }
        // }
    });

}());
