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




  // jquery código 

var input1 = document.getElementById("codigocomprobante")
var input2 = document.getElementById("cajitacheck")

var mensajeExitoso= "Bien! es todo por ahora"
var mensajeError = "Hay errores en formulario"




$("#cerrarPopup").click(cerrarPopup)
$("#popup").click(cerrarPopup)

$("#botonEnviar").click(function(){
  var input1esValido = input1.validity.valid
  var input2esValido = input2.validity.valid

  if( !input1esValido || !input2esValido ) {
    $("#contenidoPopup").html(mensajeError)
    mostrarPopup()
    
  }
})

  

