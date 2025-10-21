"use strict";

const alumnos = [
    {
        nombre: "Jorge",
        notas: [
            {asignatura: "Mates" , nota: 8},
            {asignatura: "Historia", nota: 6},
            {asignatura: "Lengua" ,nota:7}
        ]
    },
    {
        nombre: "Carmen",
        notas: [
            {asignatura: "Mates" , nota: 9},
            {asignatura: "Historia", nota: 9},
            {asignatura: "Lengua" ,nota:10}
        ]
    },
    {
        nombre: "Aitor",
        notas: [
            {asignatura: "Mates" , nota: 9},
            {asignatura: "Historia", nota: 8},
            {asignatura: "Lengua" ,nota:5}
        ]
    },
    {
        nombre: "Diego",
        notas: [
            {asignatura: "Mates" , nota: 3},
            {asignatura: "Historia", nota: 4},
            {asignatura: "Lengua" ,nota:5}
        ]
    }
];

/*
1️⃣ Obtener el alumno con la nota más alta en una asignatura
Problema: Devuelve el alumno que sacó la nota más alta en "Mates".
Pista: Combina map y reduce o find.
*/

let promedios = alumnos.map(x => (x.notas.reduce((a, b) => a + b.nota, 0)) / x.notas.length);
let max = Math.max(...promedios);
// console.log(promedios);
// console.log(max);

/*
2️⃣ Listar alumnos con todas las notas aprobadas (>=5)
Problema: Devuelve un array solo con los alumnos que han aprobado todas las asignaturas.
Pista: every sobre notas.
*/

let aprobados = alumnos.map(x => x.notas.every(x => x.nota >= 5));
// console.log(aprobados);

/*
3️⃣ Comprobar si algún alumno tiene un 10 en alguna asignatura
Problema: Devuelve true si algún alumno ha sacado un 10.
Pista: some dentro de some (alumnos → notas).
*/

let alumnosCon10 = alumnos.map(x => x.notas.some(x => x.nota == 10));
// console.log(alumnosCon10);

/*
4️⃣ Calcular la nota media de cada alumno
Problema: Devuelve un array de objetos con { nombre, media }.
Pista: map + reduce para sumar las notas.
*/

let notasMedias = alumnos.map(x => {
    let media = x.notas.reduce((a, b) => a + b.nota, 0) / x.notas.length;
    return {nombre: x.nombre, notaMedia: media};
});

// notasMedias.forEach((alu)=>{
//     console.log(alu);
// })

/*
5️⃣ Listar los alumnos que han suspendido alguna asignatura
Problema: Devuelve los nombres de los alumnos que tienen al menos una nota <5.
Pista: filter + some.
*/

let suspensos = alumnos.filter(x => x.notas.some(x => x.nota < 5)).map(x => x.nombre);
console.log(suspensos);

/*
6️⃣ Calcular la media de cada asignatura
Problema: Devuelve un objeto como { Mates: 7.25, Historia: 6.75, Lengua: 6.75 }.
Pista: recorrer alumnos y usar reduce acumulando por asignatura.
*/

let acum = {};

for (let alu of alumnos){
    for (let nota of alu.notas){
        let asignatura = nota.asignatura;
        if (!acum[asignatura]){
            acum[asignatura] = {
                suma: 0,
                cont: 0
            }
        }
        acum[asignatura].suma += nota.nota;
        acum[asignatura].cont += 1;
    }
}

for (let a in acum){
    acum[a].result = acum[a].suma / acum[a].cont;
}

for (let a in acum){
    console.log(acum[a].result);
}

/*
7️⃣ Encontrar al alumno con la peor nota global
Problema: Devuelve el alumno cuya nota media total sea más baja.
Pista: map para calcular medias y reduce para comparar.
*/

let promedio = alumnos.map(x => (x.notas.reduce((a, b) => a + b.nota, 0)) / x.notas.length);
let min = Math.min(...promedio);
console.log(min);

/*
8️⃣ Ordenar alumnos por nota media descendente
Problema: Devuelve un array de nombres ordenados de mayor a menor nota media.
Pista: map + sort.
*/

let ordenarPorNota = alumnos.map(x => {
    let notaMedia = (x.notas.reduce((a, b) => a + b.nota, 0) / x.notas.length);
    return {nombre: x.nombre, notaMedia: notaMedia};
}).sort((a, b) => b.notaMedia - a.notaMedia);

for (let alu of ordenarPorNota){
    console.log(alu);
}

/*
9️⃣ Comprobar si todos los alumnos han aprobado Mates
Problema: Devuelve true si todos los alumnos tienen Mates ≥5.
Pista: every sobre map de notas.
*/

let comprobar = alumnos.every(x => {
    let asig = x.notas.find(x => x.asignatura == "Mates");
    return asig && asig.nota >= 5;
});

console.log(comprobar);

/*
🔟 Devolver las notas de un alumno específico
Problema: Pide un nombre y devuelve todas sus notas como { asignatura, nota }.
Pista: find.
*/

let nombre = "Aitor";

let alu = alumnos.find(x => {
    return x.nombre == "Aitor" ? x.notas : undefined;
})

for (let nota of alu.notas){
    console.log(nota);
}