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

var codigocomprobante = document.getElementById("codigocomprobante")
var cajitacheck = document.getElementById("cajitacheck")
var cuentasBanco =  document.getElementById("cuentas")

window.onload = function() {
    
    cargarMontoCambio()
    validarDatosDashboard()
     
  }



function validarDatosDashboard(){
  codigocomprobante.addEventListener("input", validarComprobante)
  cajitacheck.addEventListener("input", validarCajita)
  cuentasBanco.addEventListener("input", validarCuenta)
  validarComprobante()
  validarCajita()
  validarCuenta()
}

function validarComprobante(){
    if(codigocomprobante.value == ""){
      codigocomprobante.setCustomValidity("el campo esta vaciooooo")
    }else {
    codigocomprobante.setCustomValidity("")
    }
}
function validarCajita(){
  if(cajitacheck.checked == false){
    cajitacheck.setCustomValidity("marca estoo")
  }else {
    cajitacheck.setCustomValidity("")
    }
}

function validarCuenta(){
  if(cuentasBanco.value == "vacio"){
    cuentasBanco.setCustomValidity("Elige una cuenta bancaria válida")
  }else {
    cuentasBanco.setCustomValidity("")
    }
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

  

