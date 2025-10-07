/**
 * Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen 
 * notas mayores o iguales a 7 y cuántos menores.
 */

let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mayores = t.filter(x => x > 7);
let iguales = t.filter(x => x == 7);
let menores = t.filter(x => x < 7);

console.log("Mayores: " + mayores + "\nIguales: " + iguales + "\nMenores: " + menores);