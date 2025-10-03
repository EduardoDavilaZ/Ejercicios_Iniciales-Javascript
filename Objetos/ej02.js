/*Dado el objeto:

let coche = { marca: "Toyota", modelo: "Corolla", año: 2020};
Muestra por consola la marca del coche.
Cambia el año a 2024.
Agrega una propiedad color con valor "rojo".*/


let coche = { marca: "Toyota", modelo: "Corolla", año: 2020};

console.log(coche);

console.log("Marca del coche: " + coche.marca);
coche.año = 2024;
console.log("Año del coche: " + coche.año);
coche.color = "Rojo";

console.log(coche);
