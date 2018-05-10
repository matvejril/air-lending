(function() {

    // Диалоговое окно main
    var bodyBlock = document.querySelector('body');
    var popupMain = document.querySelector('.popup');
    var showMainModalBtn = document.querySelectorAll('.js_main-modal');
    var closeMainModalBtn = document.querySelector('.popup__btn-close');

    if (!!popupMain) {
        for (var i = 0; i < showMainModalBtn.length; i++) {
            showMainModalBtn[i].addEventListener('click', showMainModal);
        }

        popupMain.addEventListener('click', hideMobileDialog);
        closeMainModalBtn.addEventListener('click', hideMobileDialog);

        function showMainModal() {
            $(popupMain).fadeIn(300);
            // popupMain.style.display = 'block';
            bodyBlock.style.overflow = "hidden";
            bodyBlock.style.paddingRight = "17px"
        }
        function hideMobileDialog(e) {
            if (e.target === popupMain || this === closeMainModalBtn) {
                // popupMain.style.display = 'none';

                $(popupMain).fadeOut(300);
                setTimeout(function () {
                    bodyBlock.style.paddingRight = "0";
                    bodyBlock.style.overflow = "visible";
                }, 300);
            }
        }
    }

    // magnific popup image
    var projectsGalleryMain = document.querySelector('.projects-gallery-main');
    if (!!projectsGalleryMain) {
        $('.projects-gallery-main__view-link').magnificPopup({
            type:'image'
        });

    }
}());
