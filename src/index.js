console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {



  function fetchDogs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addDogs(json))
  }



  function addDogs(json) {
    let div = document.getElementById('dog-image-container')

    for (let elem of json.message) {
      let img = document.createElement('img');
      img.src = elem;
      div.appendChild(img);
    }
  }


  function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json))
  }

  function addBreeds(json) {
    let ul = document.getElementById('dog-breeds');
    for (let elem in json.message){
      if (json.message[elem].length != 0) {
        for (let item of json.message[elem]) {
          let liSub = document.createElement('li');
          liSub.textContent = item + ' ' + elem;
          liSub.addEventListener('click', (e) => {
            e.preventDefault();
            liSub.style.color = "green";
          })
          ul.appendChild(liSub);
        }
      } else {
        let li = document.createElement('li')
        li.textContent = elem;
        li.addEventListener('click', (e) => {
          e.preventDefault();
          li.style.color = "green";
        })
        ul.appendChild(li);
      }
      }
    }

    function filterList() {
      let dropdown = document.getElementById('breed-dropdown');
      ul = document.getElementById('dog-breeds')
      dropdown.addEventListener("change", (e) => {
        e.preventDefault();
        for (let li of ul.children){
          li.classList.remove('hidden')
        }

        for (let li of ul.children) {
          if (li.textContent.charAt(0) != e.target.value) {
            li.className = "hidden"
          }
        }

        if (event.target.value === "reset") {
          for (let li of ul.children) {
            li.classList.remove('hidden');
          }
        }

      })
    }




      fetchDogs();
      fetchBreeds();
      filterList();

})
