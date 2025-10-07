/** Ejercicio: Dado un string " hello ":
 * - elimina los espacios en blanco al principio y al final del string
 * - convierte todas las letras a mayúsculas. 
 * - calcula la longitud del string resultante.
 * - muestra el resultado por pantalla
 */

let cadena = " hello ";
cadena = cadena.trim();
cadena = cadena.toUpperCase();
let longitud = cadena.length;

console.log("Cadena resultante: " + cadena + " \nLongitud: " + longitud);