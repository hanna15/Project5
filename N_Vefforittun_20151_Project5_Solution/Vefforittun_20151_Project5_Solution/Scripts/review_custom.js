
$(function () {
    $('#reviewform').on('submit', function () {
        var form = $(this);
        $.ajax({
            url: '/MovieApp/ReviewMovieJSON',
            data: form.serialize(),
            method: 'POST',
            success: function (responseData) {
                console.log(responseData);
                $('#reviews').html('');
                for(var i = 0 ; i < responseData.Reviews.length; i++)
                {
                    var html = '<p>' + responseData.Reviews[i].Username + ' | ' + responseData.Reviews[i].Text + '</p>';
                    $('#reviews').append(html);
                }
                $('#reviewtext').val('');
            }
        });
        return false;
    });
});

