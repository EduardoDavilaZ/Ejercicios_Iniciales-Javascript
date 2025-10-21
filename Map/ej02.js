/*
2. Sistema de Notas Escolares

Administra las notas de los alumnos de un curso.

Datos del alumno:

id (único)
nombre
notas (array con varias calificaciones numéricas)

Requisitos:

Registrar alumnos (sin repetir id o nombre).
Añadir notas a un alumno existente.
Calcular el promedio de cada alumno.
Mostrar el alumno con la mejor nota promedio.
Listar los alumnos ordenados por su promedio (de mayor a menor).
*/

let alumnos = new Map();

let altaAlumno = () => {
    let id;
    do{
        id = Number(prompt("Introduce el ID: "));
        if (!alumnos.has(id) && id != 0){

        } else{
            console.log("ERROR");
        }
    }while(id != 0);
}

let añadirNotas = () => {

}

function menu () {
    let op;
    do{
        op = Number(prompt(opciones() + 'Introduce una opción: '));
        switch (op){
            case 1: altaAlumno(); break;
            case 2: añadirNotas(); break;
        }
    }while(op != 0);
}

function opciones () {
    return '** OPCIONES **' +
        '1. Alta alumno\n' +
        '2. Añadir notas\n'
    ;
}