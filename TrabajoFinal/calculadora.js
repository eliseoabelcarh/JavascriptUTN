
var urlString = window.location.search;
var inputPesos = document.getElementById("moneda1-data")
var inputDolar = document.getElementById("moneda2-data")
var precioCambio
var nombreDeUsuario
 
var contenedorCalculadora = document.getElementById("contenedor-calculadora")
var vosenvias= document.getElementById("vosenvias")
var contenedor1= document.getElementById("contenedor1")
var rueda= document.getElementById("rueda")
var vosrecibis= document.getElementById("vosrecibis")
var contenedor2= document.getElementById("contenedor2")

var posicionDivs = 1;




//Accedo a datos enviados desde la página anterior
var nombreDeUsuario = obtenerDatoNombreDeUrl(urlString)

//actualizo caja de bienvenida
escribirCajaBienvenida(nombreDeUsuario)

//accediendo a precio dolar desde api externa
var apiURL= "http://api.currencylayer.com/live?access_key=" 
var accessKey = "8a486084196a88c74e996c1ddb81e8b0"
var monedasConsulta = "&currencies=ARS&format=1"
var urlconsulta = apiURL+accessKey+monedasConsulta

//actualizo areas y valores del documento
leerPrecioUSDARS(urlconsulta)




 //Esperamos para ejecutar programa y que cargue el valor tipo de cambio actual obtenido de la API
setTimeout(function(){
    listoParaCambiarDols()
},1000)



//LÓGICA DEL PROGRAMA FINAL
function  listoParaCambiarDols(){
        console.log(precioCambio)

        var buton = document.getElementById("CambiarBoton")
        buton.addEventListener("click", cambiarAhora)

        

        var botonGirar = document.getElementById("icono-change")
        botonGirar.addEventListener("click", intercambiar)


            
}





function cambiarAhora(){

}

