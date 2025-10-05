/**
 *  Escriba una función que devuelva una fecha en formato "dd de month de yyyy hh:mm a/pm", 
 *  donde month es el nombre del mes en inglés y "a/pm" es "am" o "pm" según corresponda. 
 *  Utilice los métodos getDate(), getMonth(), getFullYear(), getHours() y getMinutes().
 */

let fecha = new Date();

let obtenerFecha = (fecha) => {
    return fecha.toLocaleDateString('en-GB', { /* Inglés de Gran Bretaña */
        day: "numeric",
        month: "long"
    }).replace(" ", " de ") + ` de ${fecha.getFullYear()}`;
};

let obtenerHora = (fecha) => {
    let h = fecha.getHours();
    let m = fecha.getMinutes();
    let periodo = h < 12 ? "am" : "pm";
    return `${h}:${m} ${periodo}`;
};

let visualizar = (fecha) => {
    return obtenerFecha(fecha) + " " + obtenerHora(fecha);
};

console.log(visualizar(fecha));