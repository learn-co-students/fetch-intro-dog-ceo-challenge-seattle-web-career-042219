
document.addEventListener("DOMContentLoaded", () => {

function main() {
  fetchDog();
  createAlph();
  fetchBreed();
}

main();

function fetchDog() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => addImages(json));

  }

  function attachListener() {
    const dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', handleDrop);
  }

  function createAlph() {
    const rest = ['e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const breedList = document.getElementById("breed-dropdown");
    for (let i = 0; i < rest.length; i++) {
      var x = document.createElement("OPTION");
      x.value = rest[i];
      x.textContent = rest[i];
      breedList.appendChild(x)
    }
  }

  function fetchBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
      addBreeds(json)
      attachListener();
    });
  }

  function handleDrop(ev) {
    ev.preventDefault()
    const input = document.getElementById('breed-dropdown');
    const query = input.value;
    filterList(query);
  }

  function filterList(query) {
    // const breedList = document.getElementById('dog-breeds');
    const breedList = document.getElementById("dog-breeds");
    const listItems = breedList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
      const li = listItems[i];
      const first = li.textContent[0].toLowerCase()
      if (first.includes(query.toLowerCase())) {
        li.classList.remove('hidden')
      } else {
        li.classList.add('hidden')
      }
    }
  }

  function addBreeds(json) {
    const breedList = document.getElementById('dog-breeds');

    let breedArray = Object.keys(json["message"]);
    breedArray.forEach((breed) => {
      let breedItem = document.createElement("li");
      breedItem.value = breed;
      breedItem.innerText = breed;
      breedItem.addEventListener('click', () => {
        breedItem.style.color = "orange";
      });
      breedList.appendChild(breedItem);

    })
  }



  function addImages(json) {
    const imageDiv = document.getElementById('dog-image-container');
    const imageList = document.createElement('ul');
    imageList.className = "imageList"
    imageDiv.appendChild(imageList);

    let messageArray = json["message"];

    messageArray.forEach((url) =>  {
      let listItem = document.createElement("li");
      listItem.className = "listItem";
      let imageElement = document.createElement("IMG");
      imageElement.src = url;
      listItem.appendChild(imageElement);
      imageList.appendChild(listItem);

    });

  }

} )
