/**
 *  Escriba una funcición que devuelva una fecha en formato "yyyy-mm-dd".
 */

let fecha = new Date();

let obtenerFechaConFormato = (fecha) => {
    let y = fecha.getFullYear();
    let m = String(fecha.getMonth()).padStart(2, '0');
    let d = String(fecha.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

console.log(obtenerFechaConFormato(fecha));