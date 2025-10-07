/**
 * Se cuenta con la siguiente información:
 * Las edades de 5 estudiantes del turno mañana.
 * Las edades de 6 estudiantes del turno tarde.
 * Las edades de 11 estudiantes del turno noche.
 * Las edades de cada estudiante deben ingresarse por teclado.
 * a) Obtener el promedio de las edades de cada turno (tres promedios).
 * b) Imprimir dichos promedios (promedio de cada turno).
 * c) Mostrar por pantalla un mensaje que indique cual de los tres turnos
 * tiene un promedio de edades mayor.
 */

let alu = {
    mañana: [], 
    tarde: [], 
    noche: [],
};

let introducir = () => {
    introducirEdades(alu.mañana, 5, "mañana");
    introducirEdades(alu.tarde, 6, "tarde");
    introducirEdades(alu.noche, 11, "noche");
}

let introducirEdades = (t, lim, str) => {
    for (let i = 0; i < lim; i++){
        t[i] = Number(prompt("Edad del alumno " + i + " del turno " + str + ": "));
    }
}

let obtenerPromedio = (t) => {
    return (t.reduce((a, b) => a + b, 0)) / t.length;
}

introducir();

let p = []

p[0] = obtenerPromedio(alu.mañana);
p[1] = obtenerPromedio(alu.tarde);
p[2] = obtenerPromedio(alu.noche);

let promedioMax = (p) => {
    let msg = "El promedio máximo es ";
    if (Math.max(...p) == p[0]) return msg + p[0] + ' del turno mañana';
    if (Math.max(...p) == p[1]) return msg + p[1] + ' del turno tarde';
    if (Math.max(...p) == p[2]) return msg + p[2] + ' del turno noche';
}

console.log("Promedio del turno mañana: " + p[0]);
console.log("Promedio del turno tarde: " + p[1]);
console.log("Promedio del turno noche: " + p[2]);
console.log("Promedio máximo: " + promedioMax(p));