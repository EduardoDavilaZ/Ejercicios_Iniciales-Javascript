/*Confeccionar una función a la cual le envíe tres enteros y los muestre.*/

let introducir = function() {
    return Number(prompt("Número: "));
}

let visualizar = (n) =>{
    alert("Número: " + n)
}

let n1 = introducir();
let n2 = introducir();
let n3 = introducir();

visualizar(n1);
visualizar(n2);
visualizar(n3);