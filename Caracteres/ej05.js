/** Ejercicio: Dado un string "Hola Mundo":
 * - obtener una subcadena que contenga sólo las letras "Mund"
 * - convertirlas a mayúsculas.*/

let cadena = "Hola Mundo";

let subcadena = cadena.slice(cadena.indexOf("Mund"), -1);

console.log("Subcadena: " + subcadena);
console.log("Mayúsculas: " + cadena.toLocaleUpperCase());