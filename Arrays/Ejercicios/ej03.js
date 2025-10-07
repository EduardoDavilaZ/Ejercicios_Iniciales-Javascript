/**
 * Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura 
 * promedio de las personas.
 */

let t = [1, 2, 3, 4, 5];

let sum = t.reduce((a, b) => a + b, 0);
let promedio = sum / t.length;

console.log("Promedio: " + promedio);