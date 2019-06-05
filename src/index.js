console.log('%c HI', 'color: firebrick')
const BREEDS = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchImage(){
   fetch(imgUrl)
  .then(resp => {return resp.json()})
  .then(json =>{renderImages(json)})
}

function renderImages(json){
    json.message.forEach(image => {
      const img = document.createElement("IMG")
      img.src = image
      document.getElementById("dog-image-container").appendChild(img)
    })
}

function fetchBreeds(){
   fetch(breedUrl)
  .then(resp => {return resp.json()})
  .then(json =>{renderBreeds(json)})
}

function renderBreeds(json){

  let breeds = Object.keys(json.message)

  for (let i = 0; i < breeds.length; i++) {
    let dog = breeds[i]
    const breed = document.createElement("li")
    breed.textContent = dog
    document.getElementById("dog-breeds").appendChild(breed)
    breed.addEventListener("click", () => {
      breed.style.color = "pink"
    })
  }
}

fetchImage()
fetchBreeds()

document.addEventListener("DOMContentLoaded", () => {
  select = document.getElementById("breed-dropdown")
  select.addEventListener("change", (ev) => {
    let breed = ev.target.value
    filterBreeds(breed)
  })
  function filterBreeds(query){
    const ul = document.getElementById("dog-breeds")
      for (let i = 0; i < ul.children.length; i++) {
        const li = ul.children[i]
        const breed = li.textContent.toLowerCase()

        if (breed.charAt(0) == (query.toLowerCase())) {
          li.classList.remove('hidden')
        } else {
          li.classList.add('hidden')
        }
      }
    }
})
