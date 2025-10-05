/**
 *  Escriba una función que devuelva el número de horas que han transcurrido desde una fecha dada hasta la fecha actual. 
 */

let fecha = new Date();

let introducirFecha = (fecha) => {
    fecha.setDate(Number(prompt("Introduce el día: ")));
    fecha.setMonth(Number(prompt("Introduce el mes: ")) - 1);
    fecha.setFullYear(Number(prompt("Introcue el año: ")));
}

let numHorasTranscurridas = (fecha) => {
    return (Date.now() - fecha.getTime()) / 3600000;
}

introducirFecha(fecha);
console.log(numHorasTranscurridas(fecha).toFixed(2));