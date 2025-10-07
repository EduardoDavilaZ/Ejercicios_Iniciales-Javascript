/**
 * Desarrollar un programa que permita cargar 5 números enteros y luego nos
 * informe cuántos valores fueron pares y cuántos impares.
 * Emplear el operador "%" en la condición de la estructura condicional.
 * if (valor%2==0)
 * El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
 * 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.
 */

let t = [1, 2, 3, 4, 5];

let pares = t.filter(x => x % 2 == 0);
let impares = t.filter(x => x % 2 != 0);

console.log("Números pares: " + pares.length);
console.log("Números impares: " + impares.length);
