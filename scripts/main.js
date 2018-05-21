window.onload = function () {

    //plugins
    // require('../plugins/css3-animate-it-master/js/css3-animate-it');
    // require('../plugins/jquery.validate.min.js');
    // require('../plugins/maskedinput/jquery.maskedinput');

    //develops

    require('./sliders');
    require('./popups');
    require('./validation');
    require('./file-upload');
    require('./makedinput');
    // var sds = require('./test');


    var hash = location.hash;
    if (hash && hash !== '') {
        var $elem = $(hash);
        if ($elem.length) {
            var offsetTop = $elem.offset().top;
            $('body, html').animate({opacity: 1, scrollTop: offsetTop}, 50);
        }
    }
};
