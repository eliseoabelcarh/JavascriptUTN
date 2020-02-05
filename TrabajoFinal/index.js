
//-------------------------------------jquery 
$(document).ready(function(){
   //alert("sddsadadsd")
});






//-------------------------------------javascript puro
 
var intentos = 0;

var botonLogin = document.getElementById("botonLogin")

var evento = botonLogin.addEventListener("click", validarIngreso)


//PROGRAMA ANDANDO

var persona = crearUsuario()
mostrarInfoAcceso(persona)







/*
------------------- PROGRAMA ESQUEMA---------------------
crearUsuario()
mostrarInfoAcceso()

*****wait for action LOGIN BUTTON

var coinciden = validarLogin(username,password)
if(coinciden){
   redireccionar(username)
}else {
   mostrarError()
   reiniciarPagina()
}







*/