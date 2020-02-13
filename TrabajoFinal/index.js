





//-------------------------------------javascript puro
 
var intentos = 0;

var botonLogin = document.getElementById("botonLogin")
var passwordInput = document.getElementById("login-pass")


//PROGRAMA ANDANDO

var persona = crearUsuario()
mostrarInfoAcceso(persona)
activarFormulario()




//-------------------------------------jquery 

$(document).ready(function(){
   

 

   mostrarCajaInfo()
   
 
   

   
});

var cajainfo = $("#caja-info")


$(".login-link").click(mostrarPopup)
$("#cerrarPopup").click(cerrarPopup)
$("#popup").click(cerrarPopup)

$("#contenidoPopup").html("usuario: " + persona.username + "</br>password: " + persona.password)


