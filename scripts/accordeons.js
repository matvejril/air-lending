// (function() {
//     console.log($(".algorithm-tabs-main"));
//     // console.log("gasd")
//
//     var $algorithmTabsNav = $('.algorithm-tabs-nav');
//     var $algorithmTabsMain = $('.algorithm-tabs-main');
//
//     // $('.algorithm-tabs-nav__item');
//     $('.algorithm-tabs-nav__item').on('click', function() {
//         var self = $(this);
//
//
//         // Предворительно уаляем все элементы mian__item из nav
//         $algorithmTabsNav.find('.algorithm-tabs-main__item').remove();
//
//         // Получаем индекс кликнутого элемента
//         var numItem = self.index();
//
//         // Получам mian__item по indexу
//         var getMainItem = $('.algorithm-tabs-main__item').eq(numItem);
//
//         // Клонируем и вставляем элемент в nav
//         self.append(getMainItem.clone());
//
//         // // Красиво показываем новый элемент
//         // $(getMainItem).slideDown()
//
//     })
//
// }());


(function() {
    var algorithmTabs = document.querySelectorAll('.algorithm-tabs');
    if (algorithmTabs) {
        var algorithmTabsMainItem = document.querySelectorAll('.algorithm-tabs-main__item');
        var algorithmItemTitle = document.querySelectorAll('.algorithm-tabs-main__item-title');
        var algorithmTabsMainItemWrap = document.querySelectorAll('.algorithm-tabs-main__item-wrap');

        function initActive () {

            var activeSlide = 0;

            if ($(window).width() <= 1005) {
                $(algorithmTabsMainItem).removeClass('active');

                $(algorithmTabsMainItemWrap[activeSlide]).css('display', "block");
                algorithmTabsMainItem[activeSlide].classList.add('active');
                // $(algorithmTabsMainItemWrap[activeSlide]).css('display', "block");
            } else {
                // $(algorithmTabsMainItemWrap).css('display', "block");
            }
        }

        initActive();

        //навешиваем события клика на заколовок списка навигации
        for (var d = 0; d < algorithmTabsMainItem.length; d++) {
            algorithmItemTitle[d].addEventListener('click', algorithmAction)
        }

        function algorithmAction() {
            for (var n = 0; n < algorithmTabsMainItem.length; n++) {
                if (algorithmItemTitle[n] === this) {
                    if (algorithmTabsMainItem[n].classList.contains('active')) {

                        var thisPosition = algorithmTabsMainItem[n].getBoundingClientRect().top + pageYOffset;
                        // window.scrollTo(0, thisPosition - 5);

                        $("html, body").animate({ scrollTop: thisPosition - 5 }, 300);

                        $(algorithmTabsMainItemWrap[n]).slideUp(0, function() {
                            $(this).parent()[0].classList.remove('active');

                        });

                    } else if(!algorithmTabsMainItem[n].classList.contains('active')) {

                        var thisPosition = algorithmTabsMainItem[n].getBoundingClientRect().top + pageYOffset;
                        // window.scrollTo(0, thisPosition - 5);

                        $("html, body").animate({ scrollTop: thisPosition - 5 }, 300);


                        algorithmTabsMainItem[n].classList.add('active');

                        $(algorithmTabsMainItemWrap[n]).delay(300).slideDown(400, function() {
                            // var thisPosition = $(this).parent()[0].getBoundingClientRect().top + pageYOffset;
                            // window.scrollTo(0, thisPosition - 5);

                            // $(this).parent()[0].classList.add('active');
                        });
                    }
                } else {
                    algorithmTabsMainItem[n].classList.remove('active');
                    $(algorithmTabsMainItemWrap[n]).slideUp(0);
                }


            }
        }



        // $(window).on('resize', function() {
        //     initActive();
        // });
    }
}());