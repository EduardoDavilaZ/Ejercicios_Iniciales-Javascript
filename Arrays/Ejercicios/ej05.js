/**
 * Desarrollar un programa que permita ingresar un vector de 8 elementos, e
 * informe:
 * El valor acumulado de todos los elementos del vector. 
 * El valor acumulado de los elementos del vector que sean mayores a 36. 
 * Cantidad de valores mayores a 50.
 */

let t = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110];

let acum = t.reduce((a, b) => a + b, 0);

let mayores = t.filter(x => x > 36);
mayores = mayores.reduce((a, b) => a + b, 0);

let mayoresCant = t.filter(x => x > 50);


console.log("Valor acumulado: " + acum);
console.log("Valor acumulado de mayores de 36: " + mayores);
console.log("Cantidad de valores mayores a 50: " + mayoresCant.length);