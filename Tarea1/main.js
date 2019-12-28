//declaro variable numérica
var numero;
//declaro variable booleana
var bool;
//declaro variable de cadena de caracteres
var string;

//inicializo variable numero
numero = 2;
//inicializo variable bool
bool = false;
//inicializo variable string
string = "hello world!";


//se muestra en el contenido de la página
document.write(
    "mi variable número es el \"" + numero + "\"" +"<br>" +  bool +"<br>" + string + "<br>");

document.write(prompt("equipo favorito es?:","valor por defecto"));
document.write("<br>")


var pelis = ["peli1 ", "peli2", "peli3", "peli4", "peli5"];

document.write(prompt("elige tu peli favorita de la sgte lista: " + pelis,"" ));
document.write("<br>")