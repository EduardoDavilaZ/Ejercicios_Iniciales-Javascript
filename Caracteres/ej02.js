/** Ejercicio: Dado un string "Hola, me llamo Sergio y estudio en IMF":
 * - Encuentra la posición de la primera aparición de la palabra "Sergio" 
 * - Extrae el nombre "Sergio" del string. 
 * - Reemplaza "Sergio" con tu nombre. 
 * - Muestra el resultado por pantalla .
 */

let cadena = "Hola, me llamo Sergio y estudio en IMF";

let pos = cadena.indexOf("Sergio");
let cadena2 = cadena.slice(pos, pos + "Sergio".length);
let cadena3 = cadena.replace("Sergio", "Eduardo");

console.log("Posición: " + pos);
console.log("Extraer nombre: " + cadena2);
console.log("Reemplazar: " + cadena3);