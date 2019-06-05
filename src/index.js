console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function loadDogs() {
  fetch(imgUrl)
  .then(response => {
    return response.json()
  })
  .then(json => {
    displayDogs(json.message)
  })
}

function addDog(dogPhoto) {
  let ul = document.createElement('ul')
  ul.id = 'dog-photos-list'
  document.getElementById('dog-image-container').appendChild(ul)

  let li = document.createElement('li')
  li.id = dogPhoto
  li.style = 'list-style: none;'
  document.getElementById('dog-photos-list').appendChild(li)

  let image = document.createElement('img')
  image.id = dogPhoto
  image.src = dogPhoto
  document.getElementById(dogPhoto).appendChild(image)
}

function displayDogs(dogPhotos) {
  dogPhotos.forEach(function(element) {
    addDog(element)
  })
}

//*************************************************************************************************************************


function loadBreeds() {
  fetch(breedUrl)
  .then(response => {
    return response.json()
  })
  .then(json => {
    displayBreeds(Object.keys(json.message))
  })
}

function addBreed(breed) {
  console.log(breed)
  let li = document.createElement('li')
  li.id = breed
  li.textContent = breed

  const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange']
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  li.addEventListener('click', () => {
    li.style=`color: ${randomColor};`
  });

  document.getElementById('dog-breeds').appendChild(li)
}

function displayBreeds(breeds) {
  breeds.forEach(function(element) {
    addBreed(element)
  })
}
document.addEventListener('DOMContentLoaded', () => {

  function filterBreeds() {
    let filter = document.getElementById('breed-dropdown')

    filter.addEventListener('change', (event) => {
      document.querySelectorAll('#dog-breeds li').forEach(breed => {
        console.log(breed)

        if (breed.textContent.charAt(0) == event.target.value) {
          breed.style.display = "block";
        }
        else {
          breed.style.display = 'none';
        }
      })
    })
  }
  filterBreeds()
});

loadDogs()
loadBreeds()
