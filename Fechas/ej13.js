/**
 *  Escriba una función que calcule cuántos minutos han pasado desde una fecha dada hasta la fecha actual.
 */

let fecha = new Date(2025, 9, 2);

let calcularMinutos = (fecha) => {
    return (new Date().getTime() - fecha.getTime()) / 60000;
};

console.log("Minutos: " + calcularMinutos(fecha).toFixed(2));
