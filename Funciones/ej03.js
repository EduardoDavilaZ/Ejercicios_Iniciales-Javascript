/*Confeccionar una función a la cual le envíe tres enteros y retorne el mayor
de ellos.*/

let n1 = Number(prompt("Primer número: "));
let n2 = Number(prompt("Segundo número: "));
let n3 = Number(prompt("Tercer número: "));


let mayor = (n1, n2, n3) => {
    if (n1 >= n2 && n1 >= n3) return n1;
    if (n2 >= n1 && n2 >= n3) return n2;
    if (n3 >= n1 && n3 >= n2) return n3;
}

alert(mayor(n1, n2, n3));

