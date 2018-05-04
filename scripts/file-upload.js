(function() {
    $(".file-upload__hidden").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".file-upload__file-name").val(filename);
    });
}());
