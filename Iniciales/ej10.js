/*Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un
mensaje 'regular', sino 'reprobado'.*/

let notas = [];

for (let i=0; i<=3; i++){
    notas[i] = Number(prompt(`Introduce la nota ${i +1}`));
}

let promedio = (notas) => {
    let s = 0;
    for (let i=0; i<=3; i++){
        s += notas[i];
    }
    return s / (notas.length)
}

alert(promedio(notas));