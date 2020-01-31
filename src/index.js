const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  addListeners();
  fetchDogImages();
  fetchDogBreeds();
});

function addListeners() {
  document.getElementById("breed-dropdown").addEventListener("change", filter);
}

function fetchDogImages() {
  fetch(imgUrl)
    .then(result => {
      return result.json();
    })
    .then(json => {
      return addAllDogImages(json.message);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function addAllDogImages(dogs) {
  dogs.forEach(dog => addDogImage(dog));
}

function addDogImage(dog) {
  const img = document.createElement("img");
  img.setAttribute("src", dog);
  img.classList.add("small");
  const container = document.getElementById("dog-image-container");
  container.appendChild(img);
}

/// BREEDS///

function fetchDogBreeds() {
  fetch(breedUrl)
    .then(result => result.json())
    .then(json => addAllDogBreeds(json.message));
}

function addAllDogBreeds(breedsList) {
  const breedAr = Object.keys(breedsList);
  for (let i = 0; i < breedAr.length; i++) {
    let breed = breedAr[i];
    addDogBreed(breed);
  }
}

function addDogBreed(breed) {
  const li = document.createElement("li");
  li.textContent = breed;

  const ul = document.getElementById("dog-breeds");
  colorButton = document.createElement("button");
  colorButton.innerHTML = "Blue";
  colorButton.addEventListener("click", blueFx);

  li.appendChild(colorButton);
  ul.appendChild(li);
}

function filter(event) {
  event.preventDefault();
  const ul = document.getElementById("dog-breeds");
  const breedName = document.getElementById("breed-dropdown").value;
  if (breedName === "none") {
    for (let i = 0; i < ul.children.length; i++) {
      const li = ul.children[i];
      li.classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < ul.children.length; i++) {
      const li = ul.children[i];
      if (li.innerText.charAt(0) !== breedName) {
        li.classList.add("hidden");
      } else {
        li.classList.remove("hidden");
      }
    }
  }
}

function blueFx() {
  const li = event.target.parentElement;
  if (event.target.parentElement.classList.contains("blue")) {
    li.classList.remove("blue");
  } else {
    li.classList.add("blue");
  }
}
