function getImageUrls() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then( (response) => {
    return response.json();
  })
  .then( (json) => {
    renderImageList(json);
  });
}

function renderImageList(json) {
  const results = json.message;
  const imageContainer = document.querySelector('#dog-image-container');
  for (const imageUrl of results) {
    const imageTag = document.createElement('img');
    imageTag.src = imageUrl;
    imageContainer.appendChild(imageTag);
  }
}

function getBreedUrls() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
  .then( (response) => {
    return response.json();
  })
  .then( (json) => {
    renderBreedList(json);
  })
}

function renderBreedList(json) {
  const results = json.message;
  const breedContainer = document.querySelector('#dog-breeds');
  RESULTS = results;
  for (const breedName in results) {
    addBreedTagToList(breedName, breedContainer);
  }
}

function addBreedTagToList(breedName, breedContainer) {
  const breedTag = document.createElement('li');
  breedTag.innerText = breedName;
  breedTag.addEventListener("click", (event) => {
    event.target.style.color = "firebrick";
  });
  breedContainer.appendChild(breedTag);
}

function filterBreedList(event) {
  const dropDown = event.target;
  const selectedValue = dropDown.value;
  clearBreedList();
  const breedContainer = document.querySelector('#dog-breeds');
  for (const breedName in RESULTS) {
    if (selectedValue == "all" || breedName[0] == selectedValue) {
      addBreedTagToList(breedName, breedContainer);
    }
  }
}

function clearBreedList() {
  const breedContainer = document.querySelector('#dog-breeds');
  while (breedContainer.firstChild) {
    breedContainer.removeChild(breedContainer.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log('%c HI', 'color: firebrick')
  getImageUrls();
  getBreedUrls();

  const dropDown = document.querySelector('#breed-dropdown');
  dropDown.addEventListener("change", (event) => {
    filterBreedList(event);
  })
});
