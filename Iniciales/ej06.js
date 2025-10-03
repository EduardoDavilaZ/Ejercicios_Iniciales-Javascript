/*Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la
cantidad que se lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por
teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.).*/

'use strict';

let precio = Number(prompt("Precio del artículo: "));
let cantidad = Number(prompt("Cantidad: "));

document.getElementById("title").innerHTML = "Total a pagar: " + (precio * cantidad);