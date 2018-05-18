(function() {
    $(".new-project-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                minlength: 5
            }
            // email: {
            //     required: true,
            //     email: true
            // }
        }
    });

    $(".popup__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                minlength: 5
                // digits: true
            }
        }
    });

}());
