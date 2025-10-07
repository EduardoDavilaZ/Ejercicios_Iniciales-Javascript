/** Ejercicio: Dado un string "Estamos dando javascript con un nivel basico":
 * - encontrar la posición de la primera aparición de la palabra "javascript" 
 * - extraer la palabra "javascript" del string. 
 * - convertir la palabra extraída a minúsculas y 
 */

let cadena = "Estamos dando javascript con un nivel basico";

let pos = cadena.indexOf("javascript");
let palabra = cadena.slice(pos, pos + "javascript".length);
let minuscula = cadena.toLowerCase();

console.log("Posición: " + pos);
console.log("Palabra: " + palabra);
console.log("Cadena en minúsculas: " + minuscula);