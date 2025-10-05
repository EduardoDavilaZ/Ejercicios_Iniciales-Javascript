/**
 *  Escriba una función que calcule cuántos días han pasado desde el 1 de enero de un año dado hasta una fecha dada.
 */

let año = 2024;

let fecha = new Date(2025, 9, 5);


let tiempoTranscurrido = () => {
    return (fecha.getTime() - new Date(año, 0, 1).getTime()) / 86400000; /* Obtener días */
}

console.log("Días: " + tiempoTranscurrido())