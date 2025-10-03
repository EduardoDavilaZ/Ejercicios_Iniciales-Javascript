/*Elaborar una función a la cual le envíe el valor del lado de un cuadrado y
me retorne su perímetro.*/

let lado = Number(prompt("Lado: "));

let resultado = () => {
    alert("Perímetro: " + (lado * lado));
}

resultado(lado);