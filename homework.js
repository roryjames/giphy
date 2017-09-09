var topics = ["los angeles", "chicago", "new york", "phoenix", "san francisco", "london", "buenos aires", "tokyo", "berlin", "paris"];

function renderButtons() {
    $('#places-buttons').empty();
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var t = topics[i];
        var newButton = $('<button>');
        newButton.text(t)
        newButton.attr('data-type', topics[i])
        $('#places-buttons').append(newButton);
    }
};

renderButtons();


$('#places-buttons button').on('click', function() {
    $('#places-view').empty();
    var place = $(this).attr('data-type');
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + place + '&api_key=dc6zaTOxFJmzC&limit=10';
    $.ajax({
            url: queryURL,
            method: 'get'
        })
        .done(function(res) {
            var results = res.data;
            for (var i = 0; i < results.length; i++) {
                var topicsDiv = $('<div class="place">');
                var topicsImg = $('<img>');
                topicsImg.attr('src', results[i].images.fixed_height.url);
                topicsDiv.append(topicsImg)
                $('#places-view').append(topicsDiv);
            }
        })
});