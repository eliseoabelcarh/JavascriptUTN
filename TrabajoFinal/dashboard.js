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





  

