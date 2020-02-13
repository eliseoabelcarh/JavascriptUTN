
//-------------------------------------jquery 

$(document).ready(function(){
   

 

    mostrarCajaInfo()
    
  
    
 
    
 });
 
 




//----------------------------javascript nativo

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

//otra forma de acceder a datos de usuario por localstorage
var persona =  obtenerPersonaStorage()


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


        var botonCambiar = document.getElementById("CambiarBoton")
        botonCambiar.addEventListener("click", cambiarAhora)
}





function cambiarAhora(){
    //obtengo valores de inputs y guardo en localstorage
    
    if(posicionDivs ===1){
        console.log("posicion1")
        var clienteEnvia= inputPesos.value
        console.log("cliente envía " + clienteEnvia + " pesos")
        var clienteRecibira = inputDolar.value
        console.log("cliente recibirá " + clienteRecibira + " dólares")
        var fechaHoy = new Date();
        var cambiando =  {posicion: 1 ,enviaArs : clienteEnvia,recibeUSD : clienteRecibira, fecha: fechaHoy }
        agregarElementoEnArray(persona.historial,cambiando)
        console.log(persona.historial)
        guadarPersonaStorage(persona) 
        redireccionarDashboard()

        
        
        
    }else{
        console.log("posicion2")
        var clienteEnvia= inputDolar.value
        console.log("cliente envía " + clienteEnvia + " dolares")
        var clienteRecibira = inputPesos.value
        console.log("cliente recibirá " + clienteRecibira + " pesos")
        var fechaHoy = new Date();
        var cambiando =  {posicion: 2 ,enviaUSD : clienteEnvia,recibeARS : clienteRecibira, fecha: fechaHoy }
        agregarElementoEnArray(persona.historial,cambiando)
        console.log(persona.historial)
        guadarPersonaStorage(persona) 
        redireccionarDashboard()
    }

}

