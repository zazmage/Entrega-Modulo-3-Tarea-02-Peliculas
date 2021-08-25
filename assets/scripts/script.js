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

(() => {
  const xhr = new XMLHttpRequest();
  $fragment = document.createDocumentFragment();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const $slider = document.querySelector("#slider-list");
      const jsonObjects = JSON.parse(xhr.responseText);
      $slider.style.width = `${jsonObjects.length * 100}%`;
      //let jsonObjectsLength = jsonObjects.length;
      //console.log($slider.getAttribute("width"));
      for (const key in jsonObjects) {
        const $sliderSection = document.createElement("div");
        const $sliderImage = document.createElement("img");
        $sliderSection.setAttribute("class", "slider-section");
        $sliderImage.setAttribute("src", jsonObjects[key].bigImage);
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
    } else {
      console.log(xhr.statusText);
    }
  });
  xhr.open("GET", "assets/files/movies.json");
  xhr.send();
})();

(() => {
  const xhr = new XMLHttpRequest();
  $fragment = document.createDocumentFragment();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const $card = document.getElementById("card-list");

      const jsonObjects = JSON.parse(xhr.responseText);
      for (const key in jsonObjects) {
        const $cardList = document.createElement("li");
        const $cardImage = document.createElement("img");
        $cardImage.setAttribute("src", jsonObjects[key].smallImage);
        $cardImage.setAttribute("class", "card-image");
        $cardList.appendChild($cardImage);
        $fragment.appendChild($cardList);
      }
      $card.appendChild($fragment);
    } else {
      console.log(xhr.statusText);
    }
  });
  xhr.open("GET", "assets/files/movies.json");
  xhr.send();
})();

// setInterval(() => {
//   slideRight();
// }, 5000);
