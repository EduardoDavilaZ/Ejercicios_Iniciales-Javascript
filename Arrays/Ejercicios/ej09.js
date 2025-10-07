/**
 * Realizar el siguiente ejercicio utilizando Arrays asociativo.
 * En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
 * corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
 * datos debe finalizar al ingresar un valor negativo en el número de cuenta.
 * Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
 * a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
 * según su saldo, sabiendo que:
 * Estado de la cuenta 'Acreedor' si el saldo es >0.
 * 'Deudor' si el saldo es <0.
 * 'Nulo' si el saldo es =0.
 * b) La suma total de los saldos acreedores.
 */

let banco = [];
let cliente = {};

do{
    cliente = {};
    cliente.nCuenta = Number(prompt("Número de cuenta: "));
    if(cliente.nCuenta != 0){
        cliente.nombre = prompt("Nombre: ");
        cliente.saldo = Number(prompt("Saldo: "));
        banco.push(cliente);
    }
} while(cliente.nCuenta != 0);

banco.forEach(cliente => {
    let datos = "Num cuenta: " + cliente.nCuenta + " Nombre: " + cliente.nombre;
    if (cliente.saldo > 0){
        datos += " Estado: Acreedor";
    } else if (cliente.saldo < 0){
        datos += " Estado: Deudor";
    } else {
        datos += " Estado: Nulo";
    }
    console.log(datos);
});

let suma = banco.reduce((s, cliente) => {
    if (cliente.saldo > 0) {
        s += cliente.saldo;
    }
    return s;
}, 0);

console.log(suma);


