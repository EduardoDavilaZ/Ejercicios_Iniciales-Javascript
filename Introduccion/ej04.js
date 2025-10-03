// Ejercicio 4: Calculadora de edad

let añoNac = Number(prompt("Año de nacimiento: "));

const fecha = new Date();
const añoActual = fecha.getFullYear();

alert("Tu edad es: " + (añoActual - añoNac));