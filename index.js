// global variables
//2. grab template
const template = document.querySelector("#petTemplate").content;

//1. fetch content
function getPets() {
fetch("http://indraja.dk/kea/wordpress/wordpress/wp-json/wp/v2/pets?_embed")
.then(res => res.json())
.then(showPets)
}
function showPets(petList){

    petList.forEach(showSinglePet)
}
function showSinglePet(pet){
    //make a copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = pet._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
    copy.querySelector("h1").textContent=pet.title.rendered;
    copy.querySelector(".type").textContent=pet.acf.types_of_pets;
    copy.querySelector(".color").textContent=pet.acf.color;
    copy.querySelector(".age").textContent=pet.acf.age + " months";
    copy.querySelector(".weight").textContent=pet.acf.weight + " kg.";
    copy.querySelector(".lifetime").textContent=pet.acf.lifetime + " years";
    copy.querySelector(".origin").textContent=pet.acf.country_of_origin;
    copy.querySelector(".price").textContent=pet.acf.price + " EUR";
    copy.querySelector(".body").innerHTML=pet.content.rendered;

    document.querySelector("main").appendChild(copy)
}
getPets();


//3. populate template
//4. show it(append it)
