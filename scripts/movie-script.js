const selectedMovie = JSON.parse(localStorage.getItem("selected-movie"));
const $movieTitleContainer = document.querySelector(".movie-title-container");
const $movieImageContainer = document.querySelector(".movie-image-container");
const $movieDescriptionContainer = document.querySelector(
  ".movie-description-container"
);
const $movieTitle = document.createElement("h2");
const $movieImage = document.createElement("img");
const $movieDescription = document.createElement("p");

$movieTitle.setAttribute("class", "movie-title");
$movieTitle.innerHTML = selectedMovie.title;
$movieImage.setAttribute("class", "movie-image");
$movieImage.setAttribute("src", selectedMovie.bigImage);
$movieDescription.setAttribute("class", "movie-description");
$movieDescription.innerHTML = selectedMovie.description;

$movieTitleContainer.appendChild($movieTitle);
$movieImageContainer.appendChild($movieImage);
$movieDescriptionContainer.appendChild($movieDescription);
