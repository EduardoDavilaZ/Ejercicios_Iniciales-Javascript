/**
 * Realizar un programa que pida la carga de dos vectores numéricos. 
 * Obtener la suma de los dos vectores, dicho resultado guardarlo en 
 * un tercer vector del mismo tamaño. Sumar componente a componente.
 */

let t1 = [1, 2, 3, 4];
let t2 = [5, 6, 7, 8];

let t3 = t1.map((x, i) => x + t2[i]);

console.log(t3);

