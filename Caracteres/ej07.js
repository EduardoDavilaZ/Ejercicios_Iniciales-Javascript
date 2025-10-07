/** Ejercicio: Dado un string "Hola Mundo": 
 * - encontrar la posición de la primera aparición de la letra "o" 
 * - extraer todo el substring desde esa posición hasta el final del string. 
 * - reemplazar "o" con "0"
 */

let cadena = "Hola Mundo";
let pos = cadena.indexOf("o");

console.log('Primera posición de "o": ' + pos);
console.log("Substring: " + cadena.slice(pos, cadena.length));
console.log("Reemplazar: " + cadena.replaceAll("o", "0"));