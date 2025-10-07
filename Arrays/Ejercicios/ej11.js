/**
 * Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
 * a) La cantidad de valores negativos ingresados.
 * b) La cantidad de valores positivos ingresados.
 * c) La cantidad de múltiplos de 15.
 * d) El valor acumulado de los números ingresados que son pares.
 */

let t = [];

let introducir = (t) => {
    for (let i = 0; i < 9; i++){
        t[i] = Number(prompt("Número "+ i +": "));
    }
}

let valoresNegativos = (t) => {
    return (t.filter(x => x < 0)).length;
}

let valoresPositivos = (t) => {
    return (t.filter(x => x > 0)).length;
}

let multiplos = (t, num) => {
    return (t.filter(x => x % num  == 0)).length;
}

introducir(t);
console.log("Negativos: " + valoresNegativos(t));
console.log("Positivos: " + valoresPositivos(t));
console.log("Múltiplos " + multiplos(t, 15));