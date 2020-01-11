var loader = document.getElementById("loaderbody");

setTimeout(() => {
    loader.style.display = "none"
    
}, 2300);



/*
1. Declarar un array con el nombre “concurso” con los siguientes valores:
a. Marcela, Florencia, Juan, Mariano, Daniel, Sofía (el número de índice del
vector indicará la posición en el concurso)
2. Mostrar en pantalla los nombres, uno debajo del otro en una lista no ordenada <ul>
3. El concurso continua, y se van modifican esas posiciones anteriores. Debemos
modificar el vector:
a. Juan le gana a Florencia
b. Mariano es eliminado
c. Entre Marcela y Florencia ingresan 2 nuevos concursantes: Camila y Tomás,
en ese orden.
d. Un nuevo participante se ubica en la primera posición: Guillermo
4. Mostrar en pantalla los nombres, uno debajo del otro en una lista no ordenada <ul>
con la nueva clasificación.
*/

var concurso = [ "Marcela", "Florencia", "Juan", "Mariano", "Daniel", "Sofía"]



function leerLista(listita){
    listita.innerHTML =""
    for(let i = 0; i< concurso.length ; i++){
        listita.innerHTML += "<li>" + concurso[i]+ "</li>"
    }
}

function mostrarResultados(){
    var listaResultado = document.getElementById("listaResultados");
    leerLista(listaResultado)
    }






var lista = document.getElementById("lista");
leerLista(lista)


var boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function(){
    concurso[2]= "Florencia";
    concurso[1]="Juan";
     mostrarResultados();
},{once:true})

var boton2 = document.getElementById("boton2");
boton2.addEventListener("click", function(){
    concurso.splice(3,1)
    mostrarResultados();
},{once:true})

var boton3 = document.getElementById("boton3");
boton3.addEventListener("click", function(){
    concurso.splice(1,0,"Camila","Tomás")
    mostrarResultados();
},{once:true})

var boton4 = document.getElementById("boton4");
boton4.addEventListener("click", function(){
    concurso.splice(0,0,"Guillermo")
    mostrarResultados();
    
},{once:true})


