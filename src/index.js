console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function fetchBreed() {
    fetch(breedUrl)
    .then(response => {
      return response.json()
    })
    .then(json => {
      addAllBreeds(json)
    })
  }

  function addAllBreeds(json) {
    let ul = document.getElementById('dog-breeds')
    for ( let i = 0; i < Object.keys(json.message).length; i++) {
      let li = document.createElement('li')
      li.className = "breeds"
      li.addEventListener('click', (event) => {
        event.target.style.color = "green";
      })
      li.textContent = Object.keys(json.message)[i]
      ul.appendChild(li)
    }
  }

  function fetchDogs() {
    fetch(imgUrl)
    .then(response => {
      return response.json()
    })
    .then(json => {
      addAllDogs(json)
    })
  }

  function addAllDogs(json) {
    let div = document.getElementById('dog-image-container')
    for ( let i = 0; i < json.message.length; i++) {
      let img = document.createElement('img')
      img.src = json.message[i]
      div.appendChild(img)
    }
  }
  fetchDogs()
  fetchBreed()

  let dropdown = document.getElementById('breed-dropdown')
  dropdown.addEventListener('change', (e)  => {
    query = e.target.value
    filterBreeds(query)
  })

  function filterBreeds(query) {
    const ul = document.getElementById('dog-breeds')
    for (let i = 0; i < ul.children.length; i++) {
      const li = ul.children[i]
      const breed = li.textContent.charAt(0)
      if (breed.includes(query)) {
        li.classList.remove('hidden')
    } else {
      li.classList.add('hidden')
  }
}

  }
});
