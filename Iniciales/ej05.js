/*Realizar un programa que lea cuatro valores numéricos e informar su suma y
producto.*/

let n1 = Number(prompt("Primer número: "));
let n2 = Number(prompt("Segundo número: "));
let n3 = Number(prompt("Tercer número: "));
let n4 = Number(prompt("Cuarto número: "));


document.getElementById("title").innerHTML = "Suma: " + (n1 + n2 + n3 + n4);
document.getElementById("subtitle").innerHTML = "Producto: " + (n1 * n2 * n3 * n4);