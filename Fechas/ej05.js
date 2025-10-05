/**
 *  Escriba una función que devuelva la fecha de la próxima semana en formato "dd/mm/yyyy". 
 */

let fecha = new Date(2025, 9, 7);

let proximaSemana = (fecha) => {
    for (; fecha.getDay() != 1; fecha.setDate(fecha.getDate() + 1)); /* 1 de Lunes */
    console.log(`Fecha de la próxima semana: ${fecha.getDate()} / ${fecha.getMonth()} / ${fecha.getFullYear()}`);
}

proximaSemana(fecha);
