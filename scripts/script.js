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

const loadSlider = (xhr) => {
  const $slider = document.querySelector("#slider-list");
  const $fragment = document.createDocumentFragment();
  const jsonObjects = JSON.parse(xhr.responseText);
  $slider.style.width = `${jsonObjects.length * 100}%`;
  for (const key in jsonObjects) {
    const $sliderSection = document.createElement("div");
    const $sliderImage = document.createElement("img");
    $sliderSection.setAttribute("class", "slider-section");
    $sliderImage.setAttribute("src", jsonObjects[key].bigImage);
    $sliderImage.setAttribute("alt", jsonObjects[key].title);
    $sliderImage.setAttribute("class", "slider-image");
    $sliderSection.appendChild($sliderImage);
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

const loadCards = (xhr) => {
  const $card = document.getElementById("card-container");
  const $fragment = document.createDocumentFragment();
  const jsonObjects = JSON.parse(xhr.responseText);
  for (const key in jsonObjects) {
    const $cardImageContainer = document.createElement("div");
    const $hyperlink = document.createElement("a");
    const $cardImage = document.createElement("img");
    $cardImageContainer.setAttribute("class", "card-image-container");
    $hyperlink.setAttribute("href", "movieinfo.html");
    $cardImage.setAttribute("src", jsonObjects[key].smallImage);
    $cardImage.setAttribute("alt", jsonObjects[key].title);
    $cardImage.setAttribute("class", "card-image");
    $cardImage.addEventListener("click", () => {
      localStorage.setItem("selected-movie", JSON.stringify(jsonObjects[key]));
    });
    $cardImageContainer.appendChild($hyperlink);
    $hyperlink.appendChild($cardImage);
    $fragment.appendChild($cardImageContainer);
  }
  $card.appendChild($fragment);
};

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
