/*Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del
mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro).*/

let lado = Number(prompt("Lado del cuadrado: "));

document.getElementById("title").innerHTML = "El perímetro es: " + (lado * 4);