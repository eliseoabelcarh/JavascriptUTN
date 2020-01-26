
//Aplicar color de fondo #fcf79f al documento
var pagina = document.body    
pagina.style.backgroundColor=" #fcf79f"
console.log("color de fondo cambiado")

//Cambiar el color de todos los párrafos (etiqueta p) a verde (#0ca001)
var parrafos = document.getElementsByTagName("p")
for(let i = 0 ; i < parrafos.length ; i++){
    parrafos[i].style.color="#0ca001"
    console.log("párrafo "+ (i+1)  + " cambiado")
}

//Aumenta el tamaño de la fuente a 24px, solo del elemento con id "destacado"
var destacado = document.getElementById("destacado");
destacado.style.fontSize = "24px"
console.log("Tamaño de fuente de párrafo con id 'destacado' cambiado")

//Cambiar la familia tipográfica por Arial a los títulos (etiqueta h2)
var titulos = document.getElementsByTagName("h2")
for(let i = 0; i < titulos.length ; i++) {
    titulos[i].style.fontFamily="Arial"
    console.log ("titulos h2 cambiado a Arial")
}

//Crear un vínculo con la referencia "https://www.lipsum.com"
var etiqueta = document.createElement("a")
etiqueta.href="https://www.lipsum.com"
var contenido = document.createTextNode(' www.lipsum.com ')

etiqueta.appendChild(contenido)
document.body.appendChild(etiqueta)
console.log("agregamos url")



