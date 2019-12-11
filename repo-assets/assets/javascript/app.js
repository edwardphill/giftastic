// Event listener for our cat-button
$("#cat-button").on("click", function() {
  // Storing our giphy API URL for a random cat image
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function(response) {
      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var catImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      catImage.attr("src", imageUrl);
      catImage.attr("alt", "cat image");

      // Prepending the catImage to the images div
      $("#images").prepend(catImage);
    });
});

$("#dog-button").on("click", function() {
  // Storing our giphy API URL for a random cat image
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=dogs";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function(response) {
      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var dogImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      dogImage.attr("src", imageUrl);
      dogImage.attr("alt", "cat image");

      // Prepending the catImage to the images div
      $("#images").prepend(dogImage);
    });
});

$("#fish-button").on("click", function() {
  // Storing our giphy API URL for a random cat image
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=fish";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function(response) {
      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var fishImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      fishImage.attr("src", imageUrl);
      fishImage.attr("alt", "fish image");

      // Prepending the catImage to the images div
      $("#images").prepend(fishImage);
    });
});

$("#fishing-button").on("click", function() {
  // Storing our giphy API URL for a random cat image
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=fishing";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function(response) {
      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var fishingImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      fishingImage.attr("src", imageUrl);
      fishingImage.attr("alt", "fishing image");

      // Prepending the catImage to the images div
      $("#images").prepend(fishingImage);
    });
});
