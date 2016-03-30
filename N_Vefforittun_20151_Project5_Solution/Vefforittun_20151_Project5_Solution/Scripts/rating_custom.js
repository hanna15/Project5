var logID = 'log',
log = $('<div id="' + logID + '"></div>');
$('body').append(log);
$('[type*="radio"]').change(function() {
    var me = $(this);
    log.html(me.attr('value'));
});

$(function () {
    $('form').on('submit', function () {
        var form = $(this);
        $.ajax()({
            url: form.attr('action'),
            data: form.serialize(),
            mehtod: 'POST',
            success: function (responseData) {
                $('#rating').replaceWith($(respondData).find('#reviews'));
            }
        });
        return false;
    });
});

/*
function stars() {
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
});
