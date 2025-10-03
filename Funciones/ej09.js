/*Confeccionar un programa que solicite el ingreso de un número y nos
muestre dicho valor elevado a la tercera potencia.*/

let num = Number(prompt("Número: "));

let potencia = (num, pow) => {
    return Math.pow(num, pow);
}

alert("Potencia: " + potencia(num, 3));