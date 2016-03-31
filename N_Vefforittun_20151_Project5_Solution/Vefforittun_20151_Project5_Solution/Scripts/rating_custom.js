var logID = 'log',
log = $('<div id="' + logID + '"></div>');
$('body').append(log);

$(function () {
    $('[type*="radio"]').change(function() {
        var form = $(this);
        log.html(form.attr('value'));

        alert(form.attr('value'));
    
    });
});

$(function () {
    $('#ratingform').on('submit', function () {

        var form = $(this);
        $.ajax({
            url: '/MovieApp/RateMovieJSON',
            data: form.serialize(),
            method: 'POST',
            success: function (responseData) {
                console.log(responseData);
                $('#rating').html('');
                var html = '<h3>Rating: ' + responseData.RatingOverall + '</h3>';
                if (responseData.CurrentUserRating != null) {
                    html += '<p>I rated ' + responseData.CurrentUserRating.rating + ' start </p>';
                }
                else
                {
                    html += '<p>You have not rated this movie</p>';
                }

                $('#rating').append(html);
            }
        });
        return false;
    });
});

/*function stars() {
    var rating = parseInt($("#myCurrentRating").text());

    if (rating != 0) {
        $(".rateLabel").addClass("text-warning");
    }

    for (var i = 1; i < 11; i++) {
        var str = "rating_" + i;
        if (i > rating) {
            $('label[for="' + str + '"]').html("☆");
        }
        else {
            $('label[for="' + str + '"]').html("★");
        }
    }
}

$(document).ready(function () {
        $.post(theURL, rateForm, function (data) {
            $("#averageRatingMsg").html('I rated <span id="myRating"></span>');
            $("#myRating").text(data.CurrentUserRating.rating);
            $("#myCurrentRating").text(data.CurrentUserRating.rating);
            $("#ratingAverage").text(data.RatingOverall);
            stars();
        });
    });
});*/