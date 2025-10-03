/*Escribir un programa en el cual se ingresen cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto.*/

let n1 = Number(prompt("Primer número: "));
let n2 = Number(prompt("Segundo número: "));
let n3 = Number(prompt("Tercer número: "));
let n4 = Number(prompt("Cuarto número: "));

document.getElementById("title").innerHTML = "Suma de los dos primeros: " + (n1 + n2);
document.getElementById("subtitle").innerHTML = "Producto de los dos últimos: " + (n3 * n4);