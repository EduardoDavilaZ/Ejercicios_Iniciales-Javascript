/**
 *  Escriba una función que determine si una fecha es anterior a otra.
 */

let fecha1 = new Date(2025, 9, 5);
let fecha2 = new Date(2025, 3, 14);

let comparar = (fecha1, fecha2) => {
    fecha1.getTime() > fecha2.getTime() ? console.log("La primera fecha es mayor") : console.log("La segunda fecha es mayor");
}

comparar(fecha1, fecha2);