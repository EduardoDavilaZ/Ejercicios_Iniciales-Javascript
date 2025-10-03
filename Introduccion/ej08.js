// Ejercicio 8: Reversa de una cadena

let texto = "anita lava la tina";
texto = texto.replaceAll(" ", "");

let array = texto.split("");
let reverso = array.reverse();

let resultado = reverso.join("");
resultado = resultado.replaceAll(" ", "");

console.log(resultado);

console.log(texto == resultado ? "Es palíndromo" : "No es palíndromo");