/** Ejercicio: Dado un string "Hola Mundo":
 * - obtener una subcadena que contenga las 3 últimas letras del string 
 * - convertirlas a minúsculas.
 */

let cadena = "Hola Mundo";

let subcadena = cadena.slice(-3, cadena.length);
let minusculas = cadena.toLowerCase();

console.log("Subcadena: " + subcadena);
console.log("Minúsculas: " + minusculas);