/**
 * Escriba una función que devuelva una fecha en formato "dd de month de yyyy", donde month es el nombre del mes en español. *
 */

let formatearFecha = (fecha) => {
    return fecha.toLocaleDateString('es-MX', { /* es -> idioma (español) y MX -> región (México) */
        /*weekday: 'long', string de día de la semana*/ 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

let fecha = new Date();
console.log(formatearFecha(fecha));