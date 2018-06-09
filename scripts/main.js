var sliders = require('./sliders1');

window.onload = function () {
    var initialWindowWidth = $(window).width();

    //plugins
    // require('../plugins/css3-animate-it-master/js/css3-animate-it');
    // require('../plugins/jquery.validate.min.js');
    // require('../plugins/maskedinput/jquery.maskedinput');

    //develops
    require('./popups');
    require('./validation');
    require('./file-upload');
    require('./makedinput');
    require('./accordeons');




    var hash = location.hash;
    if (hash && hash !== '') {
        var $elem = $(hash);
        if ($elem.length) {
            var offsetTop = $elem.offset().top;
            $('body, html').animate({opacity: 1, scrollTop: offsetTop}, 50);
        }
    }


    var projectsGallery = document.querySelector('.projects-gallery');
    if (projectsGallery) {
        sliders.projectsSlider();
    }

    var algorithmSlider = document.querySelector('.algorithm');
    if (algorithmSlider && initialWindowWidth >= 1006) {
        sliders.algorithmSlider();
    }


    // $(window).on('resize', function() {
    //
    // })
};
