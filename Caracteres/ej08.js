/** Ejercicio: Dado un string "Hola Mundo", 
 * - encontrar la posición de la primera aparición de la palabra "Mundo" 
 * - obtener una subcadena que contenga sólo las 3 primeras letras de "Mundo"
 * - convertirlas a mayúsculas.
 */

let cadena = "Hola Mundo";

let pos = cadena.indexOf("Mundo");
let subcadena = cadena.substring(pos, pos + 3);

console.log("Posición: " + pos);
console.log("Subcadena: " + subcadena);
console.log("Mayúsculas: " + cadena.toUpperCase());