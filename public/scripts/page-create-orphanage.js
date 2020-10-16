var map = L.map('mapid').setView([-27.2160932,-49.6435018], 16);
//create map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//audio layer
const audio = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
);

//create icon

const icon = L.icon({iconUrl: "/images/map-marker.svg", 
iconSize:[58,68],
iconAnchor:[29,68]
});

    
let marker;

   
// create and add marker to


  map.on('click',(event)=>{

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon 
    marker && map.removeLayer(marker);

    //add icon layer

    marker = L.marker([lat,lng],{icon}).addTo(map);

  });

  //photos uploader

  function addPhotoField(){
      
    //pegar container de fotos #id images

    const container = document.querySelector('#images');

    //pegar container para duplicar .new-images

    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar o clone da imagem adicionada

    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    //verificar se está vazio

    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }

    //limpar campo
    newFieldContainer.children[0].value='';

    //adicionar clone ao container de imagens
    container.appendChild(newFieldContainer);
    
  }

  function deleteField(event){

    const span = event.currentTarget;
    
    const fieldsContainer = document.querySelectorAll('.new-upload');

        if(fieldsContainer.length <= 1){

             span.parentNode.children[0].value= "";
            return ;
        }

    // deletar o campo

        span.parentNode.remove();

  }


  //selecionar SIM e NÃO

  function toggleSelect(event){
    //pegar o botao clicador

    //verificar se é sim ou nao

 
    //retirar a classe active dos dois botoes

    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active');
    })

    // colocar a classe .active
    const button = event.currentTarget;
    button.classList.add('active');

    //atualizar o input hidden com o valores
    
    const input = document.querySelector('[name="open_on_weekends"]');
    
     input.value = button.dataset.value;
   

  }

function validate(event){
  //validar se lat e lng estao preenchidos
  const lat = document.querySelector('[name=lat]').value;
  const lng = document.querySelector('[name=lng]').value;
 

 if(lat== '' || lng ==''){
  audio.play();
  
  event.preventDefault();
 
  alert('Indique o orfanato no mapa');
 }

}
