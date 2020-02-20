window.onload = function(){
    //marco activo el menu actual
    document.getElementById("menu3").style.backgroundColor =  "black"
    document.getElementById("menu3").style.color =  "white"

    escribir()
}

//declaro variables
var i;
var nombre = document.getElementById("name")
var drop = document.getElementById("select-choice")
var checkbox = document.getElementById("checkbox")

var persona = {
    usuario: "actual",
    datos : []
}

var dato= {
    nombre:"",
    drop: "",
    check:""
}


var botonAdd = document.getElementById("submitBtn")


botonAdd.addEventListener("click", function(){


    validarDatos()
    
    if(validarDatos()){

        dato = {
            nombre : nombre.value,
            drop: drop.value,
            checkbox : checkbox.checked
    
        }
        
        actualizarPrevios()
    
        persona.datos.push(dato)
        localStorage.setItem("persona", JSON.stringify(persona) )
        
        

        

    }
    


})

function actualizarPrevios(){
    if(localStorage.getItem("persona") != null){
    var objetoPrevio = JSON.parse(localStorage.getItem("persona"))
    
    for(i =0; i < objetoPrevio.datos.length ; i++){
        var datoPrevio = objetoPrevio.datos[i]
        persona.datos.push(datoPrevio)
         }
    }
}


function validarDatos(){
    
    nombre.addEventListener("input",validarNombre )

    
    drop.addEventListener("input", validarDropDown)

    
    checkbox.addEventListener("input", validarCheckBox)

    var a = validarNombre()
    var b =validarDropDown()
    var c =validarCheckBox()

    return (a&b&c)
}

function validarNombre(){
    var result = false;

    
    if(nombre.value == ""){
        nombre.setCustomValidity(" no dejes vacío")

    }else {
        nombre.setCustomValidity("")
        result = true
    }
    return result

}
function validarDropDown(){
    var result = false;

    
    if(drop.value == "vacio"){
        drop.setCustomValidity("elige algo acá")
    }else{
        drop.setCustomValidity("")
        result = true
    }
    return result
}

function validarCheckBox(){
    var result = false;

    if(checkbox.checked == false){
        checkbox.setCustomValidity("marca esto")
    }else{
        checkbox.setCustomValidity("")
        result = true
    }
    return result
} 




//escribo datos de localstorage en notas

function escribir(){

    var data = JSON.parse(localStorage.getItem("persona"))

    if(data != null){

        var i = 0;
    var notasCont = document.getElementById("notas")
    
    
    
    while(i < data.datos.length){
        var datoNombre = data.datos[i].nombre
            var datoDrop = data.datos[i].drop
        
            notasCont.innerHTML += "<div >" + datoNombre + " - " + datoDrop + "</div>"
        i++;
    }
       

        
    }



    
          
}




var borrarBtn = document.getElementById("borrarBtn")
borrarBtn.addEventListener("click", function(){

   localStorage.clear()

})

