const selectedMovie = JSON.parse(localStorage.getItem("selected-movie"));
const $movieImageContainer = document.querySelector(".movie-image-container");
const $movieDescriptionContainer = document.querySelector(
  ".movie-description-container"
);
const $movieImage = document.createElement("img");
const $movieDescription = document.createElement("p");

$movieImage.setAttribute("class", "movie-image");
$movieImage.setAttribute("src", selectedMovie.bigImage);
$movieDescription.setAttribute("class", "movie-description");
$movieDescription.innerHTML = selectedMovie.description;

$movieImageContainer.appendChild($movieImage);
$movieDescriptionContainer.appendChild($movieDescription);
