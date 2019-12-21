$("#select-gif").on("click", function(event) {
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  var gif = $("#gif-input").val();

  // Querying the gify api for the search, the ?app_id parameter is required, but can equal anything
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" +
    gif;

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Saving the image_original_url property
    var imageUrl = response.data.image_original_url;

    // Creating and storing an image tag
    var img = $("<img>");

    // Setting the img src attribute to imageUrl
    img.attr("src", imageUrl);
    img.attr("alt", "search image");

    // Prepending the img to the images div
    $("#gif-button-view").prepend(img);
  });
});
// Printing the entire object to console
