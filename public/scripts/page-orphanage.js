
//Configurações de zoom

const options ={

    draggin:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//get values from html 

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


const map = L.map('mapid', options).setView([lat,lng], 16);
//create map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon =L.icon({iconUrl: "/images/map-marker.svg", 
iconSize:[58,68],
iconAnchor:[29,68],
popupAnchor:[170,2]
})


//creat and add marker

L.marker([lat,lng],{icon})
    .addTo(map)

/*image gallery */ //GALERIA DE IMAGEM!!!!! MT BOM

function selectImage(event){

const button = event.currentTarget;

//remover as classes .active

const buttons = document.querySelectorAll(".images button");

buttons.forEach((button)=>{
    button.classList.remove("active");

});

//selecionar a imagem clicada
const image = button.children[0];
const imageContainer = document.querySelector(".orphanage-details > img");
imageContainer.src = image.src;
//atualizar a imagem grande

// adicionar a classe .active para o botao clicado
button.classList.add('active');
}