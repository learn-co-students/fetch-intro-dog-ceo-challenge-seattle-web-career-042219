console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {


    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function loadImages() {
        
        fetch(imgUrl)
        .then(response => {
            return response.json()
        })
        .then(json => {
            
            for(i=0; i<json.message.length; i++) {

                let tag = document.createElement("img");
                tag.src = json.message[i];

                document.getElementById("dog-image-container").appendChild(tag);
            };
        });
    };

    function listBreeds() {

        fetch(breedUrl)
        .then(response => {
            return response.json()
        })
        .then(json => {
            for(i=0; i<Object.keys(json.message).length; i++) {

            let listItem = document.createElement("li");
            listItem.textContent = Object.keys(json.message)[i];
            listItem.addEventListener("click", ()=>{
                listItem.style.color = "purple";
                listItem.style.visility = "visible";
            });

            document.getElementById("dog-breeds").appendChild(listItem);
            };
            
        });
    };

    let dropDown = document.getElementById("breed-dropdown")
    
    function filterBreed(){
        let selectedValue = dropDown.value
        //make all hidden
        document.querySelectorAll("ul li").forEach((element)=>{
            element.style.display = "none";
        });

        
        //make selected matching breed visible
        if(selectedValue == "all") {
            document.querySelectorAll("ul li").forEach((element)=>{
                element.style.display = "list-item";
            });
        } else {
            document.querySelectorAll("ul li").forEach((element)=>{
                if(element.textContent[0] == selectedValue){
                 element.style.display = "list-item";
                }
            });
        }
    }

    dropDown.onchange = filterBreed;
    
    loadImages();
    listBreeds();
});


