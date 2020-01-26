
//accedemos a elementos ingresados en los inputs
var numero = document.getElementById("inputNumero")
var letra = document.getElementById("inputLetra")

//accedemos al texto del array y le quitamos los espacios en blanco
var cadenaString = document.getElementById("array").innerText.replace(/ /g, "")

//convertimos los caracteres del string en elementos de un array
var array = [...cadenaString]
console.log(array)

//función que verifica si número que ingresó usuario es la posición de la letra
function comparando(_numero, _letra){
    var res = false;
    if(array[_numero] === _letra){
        res= true;
    }
    return res;
}


//refrescamos página
function reiniciar(){
    location.reload();
}

//si el número ingresado no cumple condición ejecutamos algo
function validarNum(_valornum){

    if(_valornum<0 || _valornum>25){
        mostrarError();
        setTimeout(reiniciar, 3000)

    }
    
}

//muestra mensaje de error que inicialmente está oculto
function mostrarError(){
    var error = document.getElementById("error");
    error.style.display="block"
}

//cambiamos el texto del resultado según convenga
function mostrarResultado(_resultado){
    var ganaste = document.getElementById("resultado")

    if(_resultado){
        ganaste.innerText="ganaste!!"
    }else{
        ganaste.innerText="perdiste!!"
    }

}

//sumamos intentos
function acumularIntentos(_i){

    var intentos= document.getElementById("intentos")
    intentos.innerHTML= i + "/3 intentos"
    intentos.style.color = "#7175da"
    var barra = document.getElementById("barra")
    if(barra.style.width === ""){
        barra.style.width= "30%"
    }
    else if (barra.style.width === "30%"){
        barra.style.width = "75%"
    }
    else if (barra.style.width === "75%"){
        barra.style.width = "99%"
    }


}

//actualizar Intentos
function actualizarIntentos(_i){
    if(i >3){
        var error = document.getElementById("error");
        error.innerHTML="muchos intentos<br/>..reiniciando"
        error.style.display="block"
        setTimeout(reiniciar,3500)
        
        
        
    }else{acumularIntentos(i)}

}


//ACÁ OCURRE LA MAGIA!!


var boton = document.getElementById("boton")
var i = 0;
boton.addEventListener("click",jugar)


function jugar(){
    var valornum= parseInt(numero.value);
    validarNum(valornum)

    var valorletra = letra.value;
    var resultado = comparando(valornum,valorletra.toUpperCase());

    mostrarResultado(resultado);
    i++
    actualizarIntentos(i)
    
    console.log(valornum, valorletra)
    console.log(resultado)
}