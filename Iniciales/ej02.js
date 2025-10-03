/*Confeccionar una programa en JavaScript que defina e inicialice una variable de
tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de
tipo real donde almacenar el sueldo. Imprimir cada variable en una línea distinta en
pantalla.*/

let nombre = prompt("Empleado: ");
let sueldo = Number(prompt("Sueldo: "));

document.getElementById("title").innerHTML = "Empleado: " + nombre;
document.getElementById("subtitle").innerHTML = "Sueldo: " + sueldo;