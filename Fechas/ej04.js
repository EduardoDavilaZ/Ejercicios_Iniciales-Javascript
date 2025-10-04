/**
 * Escriba una función que devuelva una fecha en formato "dd/mm/yyyy". 
 */

let fecha = new Date(2025, 10, 3);

let visualizarFecha = (fecha) => {
    console.log(fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
};

visualizarFecha("Fecha: " + fecha);