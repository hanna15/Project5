
$(function () {
    $('form').on('submit', function () {
        var form = $(this);
        $.ajax()({
            url: form.attr('action'),
            data: form.serialize(),
            mehtod: 'POST',
            success: function (responseData) {
                $('#reviews').replaceWith($(respondData).find('#reviews'));
            }
        });
        return false;
    });
});

