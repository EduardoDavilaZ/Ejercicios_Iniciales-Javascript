/**
 * Desarrollar un programa que solicite la carga de 10 números e imprima la suma
 * de los últimos 5 valores ingresados.
 */

let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

t = t.slice(-5, t.length).reduce((a, b) => a + b, 0);
console.log(t);