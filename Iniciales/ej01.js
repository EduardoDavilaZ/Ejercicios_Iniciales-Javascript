/*Realizar un programa que muestre su nombre y su edad en una página HTML.
Emplear el comando write del objeto document para imprimir.
Tener en cuenta que si queremos que cada dato quede en una fila distinta de la página
debemos insertar la marca <br> (salto de linea en HTML), es decir debemos disponer:
document.write('<br>').*/



let nombre = prompt("Introduce tu nombre: ");
let edad = prompt("Introduce tu edad: ");

document.getElementById("title").innerHTML = nombre;
document.getElementById("subtitle").innerHTML = edad;