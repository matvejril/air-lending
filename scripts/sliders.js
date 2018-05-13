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
            draggable: false,
            speed: 200
            // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        });

        jobsSliderSecond
            .on('init', function (event, slick) {
                $('.projects-gallery-nav .slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: false,
                focusOnSelect: false,
                infinite: true
            });

        // Свойства и методы слайдера с алгоритмом реализации
        jobsSliderMain.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var el = $('.projects-gallery-main__item').eq(nextSlide).find('.animated');
            el.toggle().toggle();
        });

        jobsSliderSecond.on('click', '.slick-slide', function (event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
            jobsSliderMain.slick('slickGoTo', goToSingleSlide);

            $('.projects-gallery-nav .is-active').removeClass('is-active');
            $(this).addClass('is-active');

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
        var algorithmTabsNavItemAll = document.querySelectorAll('.algorithm-tabs-nav__item');
        var maxState = 0;
        algorithmTabsNavItemAll[1].classList.add("algorithm-tabs-nav__item_next");

        algorithmSliderMain.on('afterChange', function(event, slick, currentSlide) {
            algorithmSliderSecond.slick('slickGoTo', currentSlide);
            // var currentNavSlideElem = '.algorithm-tabs-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
            // $('.algorithm-tabs-nav .is-active').removeClass('is-active');
            // $(currentNavSlideElem).addClass('is-active');

        });

        algorithmSliderMain.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            var algorithmTabsNavItem = algorithmTabsNavItemAll[currentSlide];
            var algorithmTabsNavItemHasClass = algorithmTabsNavItem.classList.contains('algorithm-tabs-nav__item_visited');

            var el = $('.algorithm-tabs-main__item').eq(nextSlide).find('.animated');
            el.toggle().toggle();

            if (!algorithmTabsNavItemHasClass) {
                algorithmTabsNavItem.classList.add('algorithm-tabs-nav__item_visited')
            }
        });

        algorithmSliderSecond.on('click', '.slick-slide', function(event) {
            event.preventDefault();
            // Получаем позиции активного элемента и кликнутого
            // var activeElementState = $('.algorithm-tabs-nav').find('.is-active').index();
            var goToElementState = $(this).data('slick-index');

            // Ограничиваем возможность перехоа к элементу вправо +1 или обратно
            if ( maxState + 1 >= goToElementState) {
                algorithmSliderMain.slick('slickGoTo', goToElementState);
                $('.algorithm-tabs-nav .is-active').removeClass('is-active');
                $(this).addClass('is-active');
                // Добавляем синее выжелении
                if (maxState < goToElementState) {
                    maxState = goToElementState;
                    for (var e = 0; e < maxState + 1; e++) {
                        algorithmTabsNavItemAll[e].classList.remove('algorithm-tabs-nav__item_next');
                    }
                    algorithmTabsNavItemAll[maxState + 1].classList.add('algorithm-tabs-nav__item_next');
                }
            }
        });

    }

}());
