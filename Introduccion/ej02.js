// Ejercicio 2: Suma de dos números

let a = Number(prompt("Primer número: "));
let b = Number(prompt("Segundo número: "));

let result = (a, b) => {
    return a + b;
};

alert("Resultado: " + result(a, b));