//-------------------------------------jquery 

$(document).ready(function(){
   

 

  mostrarCajaInfo()
  

  

  
});


var cajainfo = document.getElementById("caja-info")
var persona = obtenerPersonaStorage()
var posicionDeCambio = obtenerPosicionDeCambio()
var botonVerificar = document.getElementById("botonVerificar")
botonVerificar.addEventListener("click",mostrarAreaVideo )
var contenedorVideo = document.getElementById("contenedor-Video")


window.onload = function() {
    
    cargarMontoCambio()
     
  }





  


function mostrarAreaVideo(){

  
  if(contenedorVideo.style.display == "block"){
    contenedorVideo.style.display = "none"
  }
  else{
    contenedorVideo.style.display = "block"
  }
}




function obtenerPosicionDeCambio(){
    var posicion ;
    var ultimoCambio = persona.historial.length-1
    if(persona.historial[ultimoCambio].posicion === 2 ) {
        posicion = 2
    }else {
        posicion = 1
    }
    return posicion
}




function cargarMontoCambio(){

    var ultimoCambio = persona.historial.length-1

   if( posicionDeCambio === 1 ){
        var userEnvia = persona.historial[ultimoCambio].enviaArs
        var userRecibe =persona.historial[ultimoCambio].recibeUSD
        cajainfo.innerHTML = "Deberás enviar: "+ userEnvia + " Pesos</br>Recibirás: " + userRecibe + " Dólares"
   }
   if(posicionDeCambio === 2 ) {
        var userEnvia = persona.historial[ultimoCambio].enviaUSD
        var userRecibe =persona.historial[ultimoCambio].recibeARS
        cajainfo.innerHTML = "Deberás enviar: "+ userEnvia + " Dólares</br>Recibirás: " + userRecibe + " Pesos"
   }

}



