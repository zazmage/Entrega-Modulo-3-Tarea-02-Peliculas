// Slide the slider to the right.
const slideRight = () => {
  let $sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
  let transitionTime = 1;
  const $slider = document.querySelector("#slider-list");
  $slider.style.marginLeft = "-200%";
  $slider.style.transition = `all ${transitionTime}s`;
  setTimeout(() => {
    $slider.style.transition = "none";
    $slider.insertAdjacentElement("beforeend", $sliderSectionFirst);
    $slider.style.marginLeft = "-100%";
  }, transitionTime * 1000);
};

// Slide the slider to the left.
const slideLeft = () => {
  let $sliderSectionAll = document.querySelectorAll(".slider-section");
  let $sliderSectionLast = $sliderSectionAll[$sliderSectionAll.length - 1];
  let transitionTime = 0.5;
  const $slider = document.querySelector("#slider-list");
  $slider.style.marginLeft = "0";
  $slider.style.transition = `all ${transitionTime}s`;
  setTimeout(function () {
    $slider.style.transition = "none";
    $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);
    $slider.style.marginLeft = "-100%";
  }, transitionTime * 1000);
};

// Creates the slider elements, adds their attributes and event listeners
// to them and adds them to the html document.
// Load the information of the selected movie to the local storage
const loadSlider = (xhr) => {
  const $slider = document.querySelector("#slider-list");
  const $fragment = document.createDocumentFragment();
  const jsonObjects = JSON.parse(xhr.responseText);
  const $sliderButtons = document.querySelectorAll(".slider-button");
  $slider.style.width = `${jsonObjects.length * 100}%`;
  for (const key in jsonObjects) {
    const $sliderSection = document.createElement("div");
    const $hyperlink = document.createElement("a");
    const $sliderImage = document.createElement("img");
    $sliderSection.setAttribute("class", "slider-section");
    $hyperlink.setAttribute("href", "movieinfo.html");
    $sliderImage.setAttribute("src", jsonObjects[key].bigImage);
    $sliderImage.setAttribute("alt", jsonObjects[key].title);
    $sliderImage.setAttribute("class", "slider-image");
    $sliderImage.addEventListener("click", () => {
      localStorage.setItem("selected-movie", JSON.stringify(jsonObjects[key]));
    });
    $sliderImage.addEventListener("mouseover", () => {
      $sliderButtons.forEach((i) => {
        i.style.display = "block";
      });
    });
    $sliderImage.addEventListener("mouseout", () => {
      $sliderButtons.forEach((i) => {
        i.style.display = "none";
      });
    });
    $sliderButtons.forEach((i) => {
      i.addEventListener("mouseover", () => {
        $sliderButtons.forEach((j) => {
          j.style.display = "block";
        });
      });
      i.addEventListener("mouseout", () => {
        $sliderButtons.forEach((j) => {
          j.style.display = "none";
        });
      });
    });
    $hyperlink.appendChild($sliderImage);
    $sliderSection.appendChild($hyperlink);
    $fragment.appendChild($sliderSection);
  }
  $slider.appendChild($fragment);
  let $sliderSectionAll = document.querySelectorAll(".slider-section");
  let $sliderSectionLast = $sliderSectionAll[$sliderSectionAll.length - 1];
  const $sliderButtonLeft = document.querySelector("#slider-button-left");
  const $sliderButtonRight = document.querySelector("#slider-button-right");
  $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);
  $sliderButtonRight.addEventListener("click", slideRight);
  $sliderButtonLeft.addEventListener("click", slideLeft);
  let sliderTimer = setInterval(slideRight, 7000);
  $sliderButtonRight.addEventListener("click", () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(slideRight, 7000);
  });
  $sliderButtonLeft.addEventListener("click", () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(slideRight, 7000);
  });
};

// Creates the cards elements, adds their attributes and event listeners
// to them and adds them to the html document.
// Load the information of the selected movie to the local storage.
const loadCards = (xhr) => {
  const $card = document.getElementById("card-container");
  const $fragment = document.createDocumentFragment();
  const jsonObjects = JSON.parse(xhr.responseText);
  for (const key in jsonObjects) {
    const $hyperlink = document.createElement("a");
    const $cardImageContainer = document.createElement("div");
    const $cardImage = document.createElement("img");
    const $cardTitle = document.createElement("h3");
    $hyperlink.setAttribute("href", "movieinfo.html");
    $hyperlink.setAttribute("class", "card-hyperlink");
    $cardImageContainer.setAttribute("class", "card-image-container");
    $cardImage.setAttribute("src", jsonObjects[key].smallImage);
    $cardImage.setAttribute("alt", jsonObjects[key].title);
    $cardImage.setAttribute("class", "card-image");
    $cardImage.addEventListener("click", () => {
      localStorage.setItem("selected-movie", JSON.stringify(jsonObjects[key]));
    });
    $cardTitle.setAttribute("class", "card-title");
    $cardTitle.innerHTML = jsonObjects[key].title;
    $cardImageContainer.appendChild($cardImage);
    $cardImageContainer.appendChild($cardTitle);
    $hyperlink.appendChild($cardImageContainer);
    $fragment.appendChild($hyperlink);
  }
  $card.appendChild($fragment);
};

// Asynchronously load the objects with the movie information stored
// in the local json file, use this information to load the slider and
// the cards, also upload a copy to the localstorage.
(() => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      localStorage.setItem("movies", xhr.responseText);
      loadSlider(xhr);
      loadCards(xhr);
    } else {
      console.log(xhr.statusText);
    }
  });
  xhr.open("GET", "files/movies.json");
  xhr.send();
})();
