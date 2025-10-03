/*Realizar un programa que lea por teclado dos números, si el primero es mayor al
segundo informar su suma y diferencia, en caso contrario informar el producto y la división
del primero respecto al segundo.*/

let n1 = Number(prompt("Primer número: "));
let n2 = Number(prompt("Segundo número: "));

if (n1 > n2){
    alert("Suma = " + (n1+n2) + " y Diferencia =  " + (n1-n2));
} else {
    alert("Producto = " + (n1*n2) + " y División = " + (n1/n2));
}
