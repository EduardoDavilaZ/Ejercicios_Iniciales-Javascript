/** Ejercicio: Dado un string "abcdefghijklmnopqrstuvwxyz":
 * - extraer la primera mitad del alfabeto 
 * - convertir todas las letras a mayúsculas.
 */

let cadena = "abcdefghijklmnopqrstuvwxyz";
let primeraMitad = cadena.slice(0, cadena.length / 2);
let mayusculas = cadena.toUpperCase();

console.log("Primera mitad en mayúsculas: " + primeraMitad);
console.log("En mayúsculas: " + mayusculas);