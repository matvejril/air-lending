(function() {
    $(".new-project-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                requiredphone: true
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
                requiredphone: true
            }
        }
    });

    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
    });

}());
