(function() {
    // jQuery(function($){
    //     $(".popup__phone").mask("+7 (999) 999-9999");
    // });


    $(".popup__phone")
        .mask("+7 (999) 999-9999")
        .bind("blur", function () {

            // force revalidate on blur.
            var frm = $(this).parents("form");

            // if form has a validator
            if ($.data( frm[0], 'validator' )) {
                var validator = $(this).parents("form").validate();
                validator.settings.onfocusout.apply(validator, [this]);
            }
        });

    // jQuery(function($){
    //     $(".new-project-form__input_phone").mask("+7 (999) 999-99-99");
    // });


    $(".new-project-form__input_phone")
        .mask("+7 (999) 999-9999")
        .bind("blur", function () {

            // force revalidate on blur.
            var frm = $(this).parents("form");

            var validator = $(this).parents("form").validate();
            validator.settings.onfocusout.apply(validator, [this]);
            // if form has a validator
            // if ($.data( frm[0], 'validator' )) {
            //     var validator = $(this).parents("form").validate();
            //     validator.settings.onfocusout.apply(validator, [this]);
            // }
        });

    // $('.new-project-form__input_phone').on('blur', function(){
    //     // $('.new-project-form').validate().element('.new-project-form__input_phone');
    //     console.log("hellosss")
    // });

}());
