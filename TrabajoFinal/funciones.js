




function crearUsuario(){
    var _username = prompt("Crea tu usuario", "demo")
    var _password = prompt("Crea tu password", "demo")

    var persona = {
        username : _username,
        password : _password
    }

    return (persona)
}

function mostrarInfoAcceso(persona){
    var cajaInfo = document.getElementById("caja-info")
    cajaInfo.innerHTML="Accesos para acceso: <br/> username: "+persona.username+"<br/>password: "+ persona.password
}



function validarIngreso(){
    var datoUsername = document.getElementById("login-name").value
    var datoPassword = document.getElementById("login-pass").value
    

    //objeto persona ya debería estar existiendo en este punto
    //validaremos datos ingresados con la de persona
    var resultado = coinciden(datoUsername ,datoPassword )
    
    if(resultado){
        console.log("ingreso exitoso!! ")
        //redireccionamos a usuario a su panel propio
        mostrarMensajeExito()
        //guardarSesionPersona()
        setTimeout(redireccionar, 2000)
        
    }else {
        console.log("ingreso no válido")
        intentos++;
        mostrarMensajeError()
        
    }

}

function coinciden(dato1, dato2){

    if(persona.username === dato1){
        console.log("usernamee coicnide")

    } else {
        console.log("username no coinicde")
    }
    if(persona.password === dato2){
        console.log("paswwr coicnide")

    } else {
        console.log("paswrr no coinicde")
    }
    var resultado = (persona.username === dato1 && persona.password === dato2)
    return (resultado)
}



function redireccionar(){
    
     var nombre = persona.username
     

   location.replace("dashboard.html?data=%7B%22username%22:%22"+nombre+"%22%7D")

}

function mostrarMensajeError(){
    var cajaMensaje = document.getElementById("caja-mensaje")
    cajaMensaje.style.color = "red"
    cajaMensaje.style.display = "block"
    cajaMensaje.innerHTML = "Ingreso No Válido, intentos: " + intentos
    
}

function mostrarMensajeExito(){
    var cajaMensaje = document.getElementById("caja-mensaje")
    cajaMensaje.style.color = "green"
    cajaMensaje.style.display = "block"
    cajaMensaje.innerHTML = "Ingreso Exitoso!! redireccionando ..." 
    
}


function obtenerDatoNombreDeUrl(_urlActual){
    var datosRecibidos = (parseURLParams(urlString)).data[0]
    var dato = datosRecibidos.split('"')[3]
    return dato;
}



function escribirCajaBienvenida(_nombreUsuario){
    var cajaInfo = document.getElementById("caja-info")
    cajaInfo.innerHTML = "Tu usuario es: " + _nombreUsuario
    
}



//única función NO propia OBTENIDA DE INTERNET
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}


function leerPrecioUSDARS(consulta){
    return fetch(consulta)
    .then(response => response.json())
    .then(data => {        
        var objetoDeDatos = data
        precioCambio = objetoDeDatos.quotes.USDARS
        actualizarValoresDolar(this.inputDolar,this.inputPesos)
        mostrarPrecioCambio(objetoDeDatos)
                })
    .catch(error => console.error(error))
}

function mostrarPrecioCambio(){
    var cajaMensaje = document.getElementById("caja-mensaje")
    cajaMensaje.style.display = "block"
    cajaMensaje.innerHTML = "Tipo de Cambio: "+ ((this.precioCambio).toFixed(2))
    
}



function actualizarValoresDolar(inputDols, inputPesos){

    _tipoCambio = this.precioCambio
    inputDols.value = (parseFloat(inputPesos.value/_tipoCambio)).toFixed(3)
   
}


function actualizarCajas(){
    var caja2 =this.inputDolar
    var caja1= this.inputPesos   
    actualizarValoresDolar(caja2, caja1)
    
}


function actualizarValoresPesos(inputDols, inputPesos){

    _tipoCambio = this.precioCambio
    inputPesos.value = (parseFloat(inputDols.value*_tipoCambio)).toFixed(3)
   
}

function actualizarCajas2(){
    var caja2 =this.inputDolar
    var caja1= this.inputPesos   
    actualizarValoresPesos(caja2, caja1)
    
}


function intercambiar()
{

    if(posicionDivs ===1)
    {
        contenedorCalculadora.appendChild(vosenvias)
        contenedorCalculadora.appendChild(contenedor2)
        contenedorCalculadora.appendChild(rueda)
        contenedorCalculadora.appendChild(vosrecibis)
        contenedorCalculadora.appendChild(contenedor1)
        posicionDivs = 2;
    }
    else
    {
        contenedorCalculadora.appendChild(vosenvias)
        contenedorCalculadora.appendChild(contenedor1)
        contenedorCalculadora.appendChild(rueda)
        contenedorCalculadora.appendChild(vosrecibis)
        contenedorCalculadora.appendChild(contenedor2)
        posicionDivs = 1;
    }
}