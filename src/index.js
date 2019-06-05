const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  function main() {
    console.log("main fires");
    addListeners();
    fetchDogImages();
    fetchDogBreeds();
  }
  main();

  function addListeners() {
    document
      .getElementById("breed-dropdown")
      .addEventListener("change", filter);
  }

  function fetchDogImages() {
    fetch(imgUrl)
      .then(result => {
        return result.json();
      })
      .then(json => {
        return addAllDogImages(json.message);
      });
  }

  function addAllDogImages(dogs) {
    console.log("dogs=", dogs);
    dogs.forEach(dog => addDogImage(dog));
  }

  function addDogImage(dog) {
    console.log("dog=", dog);
    let img = document.createElement("img");
    img.setAttribute("src", dog);
    img.classList.add("small");
    let container = document.getElementById("dog-image-container");
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
    let li = document.createElement("li");
    li.textContent = breed;
    let ul = document.getElementById("dog-breeds");
    colorButton = document.createElement("button");
    colorButton.innerHTML = "Blue";
    colorButton.addEventListener("click", blueFx);
    li.appendChild(colorButton);
    ul.appendChild(li);
  }

  function filter(event) {
    event.preventDefault();
    let ul = document.getElementById("dog-breeds");
    let breedName = document.getElementById("breed-dropdown").value;
    console.log("breedName=", breedName);
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
    console.log("blueFx fires");
    //   const li = this.parentElement;
    const li = event.target.parentElement;
    if (event.target.parentElement.classList.contains("blue")) {
      li.classList.remove("blue");
    } else {
      li.classList.add("blue");
    }
  }
});
