/**
 * Escriba una función que determine si una fecha es posterior a otra. 
 */

let fecha1 = new Date(2025, 4, 20);
let fecha2 = new Date(2025, 6, 12);

let esPosterior = (fecha1, fecha2) => {
    return fecha1 > fecha2;
}

esPosterior(fecha1, fecha2) ? alert("La fecha 1 es posterior.") : alert("La fecha 1 es anterior.");