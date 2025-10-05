/**
 *  Escriba una función que devuelva el tiempo transcurrido desde una fecha dada en formato "HH:MM:SS".
 */

let fecha = new Date();

let introducirFecha = () => {
    fecha.setDate(Number(prompt("Introduce el día: ")));
    fecha.setMonth(Number(prompt("Introduce el mes: ")) - 1);
    fecha.setFullYear(Number(prompt("Introduce el año: ")));
    fecha.setHours(Number(prompt("Introduce la hora: ")));
    fecha.setMinutes(Number(prompt("Introduce el minuto: ")));
    fecha.setSeconds(Number(prompt("Introduce los segundos: ")));
}

let tiempoTranscurrido = () => {
    return (Date.now() - fecha.getTime()) / 1000; /* Convertir a segundos */
}

let visualizarTiempo = () => {
    let total = tiempoTranscurrido();

    let h = Math.floor(total / 3600);
    let m = Math.floor((total % 3600) / 60);
    let s = Math.floor(total % 60);
    
    console.log(`Tiempo transcurrido: ${h}:${m}:${s}`)

}
introducirFecha();
visualizarTiempo();