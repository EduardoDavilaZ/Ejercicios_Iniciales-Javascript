/**
 * Escriba una función que calcule cuántos días faltan para el final de un mes dado. 
 */

let fecha = new Date(2025, 10, 3);

function diasEnMes(anyo, anyo) {
    return new Date(anyo, anyo + 1, 0).getDate(); // 0 es el último día del mes anterior
}

let diasFaltantes = (fecha) => {
    return diasEnMes(fecha.getFullYear(), fecha.getMonth()) - fecha.getDate();
}

console.log("Días faltantes: " + diasFaltantes(fecha));