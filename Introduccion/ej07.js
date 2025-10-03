// Ejercicio 7: Número mayor de un array

let numeros = [4, 6, 2, 8, 6, 10, 40, 23];

let obtenerMayor = (numeros) => {
    let max = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > max || i == 0){
            max = numeros[i];
        }
    }
    return max;
}

alert("Número máximo: " + obtenerMayor(numeros));