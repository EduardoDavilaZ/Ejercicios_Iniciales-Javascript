/**
 * Escriba una función que calcule cuántos días han pasado desde el 1 de enero de un año dado hasta la fecha actual.
 */

let inicio = new Date(2025, 0, 1);
let diferencia = Date.now() - inicio.getTime();

console.log(diferencia); // en milisegundos

diferencia /= 1000; // en segundos
diferencia /= 60; // en minutos
diferencia /= 60; // en horas
diferencia /= 24; // en días

console.log(Number(diferencia).toFixed(0)); // en días sin decimales