/*Elaborar una función que reciba tres enteros y retorne el promedio.*/

let promedio = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
}

let introducir = () => {
    return Number(prompt("Introduce: "));
}

let n1 = introducir();
let n2 = introducir();
let n3 = introducir();

alert("Promedio: " + promedio(n1, n2, n3));