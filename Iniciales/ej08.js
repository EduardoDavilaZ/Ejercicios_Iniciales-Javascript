/*Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos
utilizar el operador ==).*/

let c1 = prompt("Ingresa la clave: ");
let c2 = prompt("Vuelva a ingresar la clave: ");

c1 === c2 ? alert("Son iguales") : alert("No son iguales");