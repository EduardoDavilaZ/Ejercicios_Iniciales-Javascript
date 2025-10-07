/**
 * Realizar un programa que permita cargar dos listas de 3 valores cada una.
 *  Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
 *  (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
 *  Tener en cuenta que puede haber dos o más estructuras repetitivas en un
 *  algoritmo.
 */

let a = [1, 2, 3];
let b = [4, 5, 6];

let acum = (lista) => {
    return lista.reduce((a, b) => a + b, 0);
}

let resultado = (a, b) => {
    if (acum(a) > acum(b)) console.log("La lista 1 es mayor");
    if (acum(a) < acum(b)) console.log("La lista 2 es mayor");
    if (acum(a) == acum(b)) console.log("Las listas son iguales");
}

resultado(a, b);