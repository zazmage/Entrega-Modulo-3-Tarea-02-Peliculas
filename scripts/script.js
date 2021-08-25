(() => {
  const xhr = new XMLHttpRequest();
  $fragment = document.createDocumentFragment();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const $slider = document.getElementById("slider-list");
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
    } else {
      console.log(xhr.statusText);
    }
  });
  xhr.open("GET", "files/movies.json");
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
  xhr.open("GET", "files/movies.json");
  xhr.send();
})();
