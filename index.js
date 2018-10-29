// global variables
//2. grab template
const template = document.querySelector("#petTemplate").content;

//1. fetch content
function getPets() {
fetch("http://indraja.dk/kea/wordpress/wordpress/wp-json/wp/v2/pets")
.then(res => res.json())
.then(showPets)
}
function showPets(petList){

    petList.forEach(showSinglePet)
}
function showSinglePet(pet){
    console.log(pet.title.rendered)
    //make a copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent=pet.title.rendered;
    document.querySelector("main").appendChild(copy)
}
getPets();


//3. populate template
//4. show it(append it)
