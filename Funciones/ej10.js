/*Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho
valor.*/

let num = Number(prompt("Número: "));

let raiz = (num, root) => {
    return Math.sqrt(num, root);
}

alert("Potencia: " + raiz(num, 2));