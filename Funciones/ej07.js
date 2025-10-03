/*Confeccionar una función que solicite la carga de 5 valores por teclado y
retorne su suma.*/

let introducir = () => {
    return Number(prompt("Introduce: "));
}

let suma = () => {
    let array = [];
    let s = 0;
    for (let i=0; i<5; i++){
        array[i] = introducir();
        s += array[i];
    }
    return s;
}

alert("Suma: " + suma());