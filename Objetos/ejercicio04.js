let socios = new Map();
let clases = new Map();
let inscripciones = new Set();

/* SOCIOS */

let altaSocio = () => {
    let id;
    do{
        id = Number(prompt("Introduce el ID: "));
        if (!socios.has(id) && id != 0){
            let datos = {}; 
            datos.nombre = prompt("Nombre: ");
            datos.correo = prompt("Correo: ");
            socios.set(id, datos);
            console.log(datos);
        } else {
            console.log("Error al registrar.");
        }
    } while(id != 0);
}

let listarSocios = () => {
    for (let [id, datos] of socios.entries()){
        console.log('ID: ' + id);
        console.log(datos);
    }
}

/* CLASES */

let registrarClases = () => {
    let id;
    do{
        id = Number(prompt("Introduce el ID: "));
        if (!clases.has(id) && id != 0){
            let datos = {};

            do{
                datos.nombre = prompt("Nombre de la clase: ");
            } while(buscarNombreClase(datos.nombre));

            datos.instructor = prompt("Instructor: ");
            datos.cupos = Number(prompt("Cupos: "));
            datos.asistencias = [];
            clases.set(id, datos);
            console.log(datos);
        } else {
            console.log("Error al registrar.");
        }
    } while(id != 0);
}

let buscarNombreClase = (nombre) => {
    for (let datos of clases.values()){
        if (datos.nombre == nombre){
            return true;
        }
    }
    return false;
}

let listarClases = () => {
    for (let [id, datos] of clases.entries()){
        console.log('ID: ' + id);
        console.log(datos);
    }
}

let buscarClases = () => {
    let nombre = prompt("Introduce el nombre o el instructor: ");
    for (let datos of clases.values()){
        if (datos.nombre == nombre || datos.instructor == nombre){
            console.log(datos);
        }
    }
}

/* INSCRIPCIONES */

let registrarInscripciones = () => {
    let idSocio = 0, idClase = 0;
    do{
        idSocio = Number(prompt("ID Socio: "));
        idClase = Number(prompt("ID Clase: "));
        if (idSocio === 0) break;

        if (verificarInscripcion(idSocio, idClase) && comprobarCupos(idClase) && idSocio != 0){
            const key = JSON.stringify([idSocio, idClase]);
            if (!inscripciones.has(key)){
                inscripciones.add(key);
                console.log("Registrado");
            } else {
                console.log("El socio ya está inscrito a esa clase.");
            }
        }
    } while(idSocio != 0);
}

let verificarInscripcion = (idSocio, idClase) => {
    if (!socios.has(idSocio)){
        console.log('Socio con ID: ' + idSocio + ' no existe.');
        return false;
    }
    if (!clases.has(idClase)){
        console.log('La clase con ID: ' + idClase + ' no existe.');
        return false;
    }
    return true;
}

let comprobarCupos = (idClase) => {
    let usuarios = 0;
    let cupos = (clases.get(idClase)).cupos;
    for (let valor of inscripciones){
        let valores;
        valores = JSON.parse(valor);
        if (valores[1] == idClase){
            usuarios++;
        }
    }
    
    if (usuarios < cupos){
        console.log("Si hay cupos.");
        return true;
    } else {
        console.log("No hay cupos.");
        return false;
    }
}

let mostrarClasesDeSocio = () => {
    let idSocio = Number(prompt("ID Socio: "));
    for (let [idClase, datos] of clases.entries()){
        const key = JSON.stringify([idSocio, idClase]);
        if (inscripciones.has(key)){
            console.log(datos);
        }
    }
}

let mostrarSociosDeClase = () => {
    let idClase = Number(prompt("ID Clase: "));
    for (let [idSocio, datos] of socios.entries()){
        const key = JSON.stringify([idSocio, idClase]);
        if (inscripciones.has(key)){
            console.log(datos);
        }
    }
}

let clasesConCupo = () => {
    for (let [idClase, datos] of clases.entries()){
        if (comprobarCupos(idClase)){
            console.log(datos);
        }
    }
}

let sociosInscritosPorInstructor = () => {
    let instructores = new Map();
    for (let [idClase, datos] of clases.entries()){
        let numSocios = contarSocios(idClase);
        const actual = instructores.get(datos.instructor) ?? 0;
        instructores.set(datos.instructor, actual + numSocios);
    }

    for (let [nombre, numSocios] of instructores){
        console.log('Instructor: ' + nombre + ' Num de socios: ' + numSocios);
    }
}

let contarSocios = (idClase) => {
    let cont = 0;
    for (let valor of inscripciones){
        let valores;
        valores = JSON.parse(valor);
        if (valores[1] == idClase){
            cont++;
        }
    }
    return cont;
};

/* ASISTENCIAS */

let registrarAsistencia = () => {
    let idClase = Number(prompt("ID Clase: "));
    let clase = clases.get(idClase);
    if (!clase){
        console.log("La clase no existe.");
        return;
    }
    let idSocio = 0;
    do {
        idSocio = Number(prompt("ID Socio: "));
        if (idSocio === 0) break;

        if (socios.has(idSocio) && inscripciones.has(JSON.stringify([idSocio, idClase]))){
            let datos = {};
            datos.idSocio = idSocio;
            datos.fecha = new Date();
            datos.presente = (prompt("Presente (s/n): ")) === "s";
            console.log(datos);
            clase.asistencias.push(datos); 
        } else{
            console.log("Algo falló. Comprobar si el socio existe o si no ha sido agregado a la clase.");
        }

    } while (idSocio != 0)
}

let consultarAsistencias = () => {
    let idClase = Number(prompt("ID Clase: "));
    let clase = clases.get(idClase);
    if (!clase){
        console.log("La clase no existe.");
        return;
    }

    clase.asistencias.forEach(element => {
        console.log(element);
    });
}

let historialDeAsistencias = () => {
    for (let idSocio of socios.keys()){
        console.log("ID Socio: " + idSocio);
        for (let clase of clases.values()){
            for (let asistencia of clase.asistencias){
                if (asistencia.idSocio == idSocio){
                    console.log('Fecha: ' + asistencia.fecha + " Presente: " + asistencia.presente);
                }
            }
        }
    }
}

function menu () {
    let op;
    do{
        op = Number(prompt(opciones() + "Introduce una opción: "));
        switch(op){
            case 1: altaSocio(); break;
            case 2: listarSocios(); break;
            case 3: registrarClases(); break;
            case 4: listarClases(); break;
            case 5: buscarClases(); break;
            case 6: registrarInscripciones(); break;
            case 7: mostrarClasesDeSocio(); break;
            case 8: mostrarSociosDeClase(); break;
            case 9: clasesConCupo(); break;
            case 10: sociosInscritosPorInstructor(); break;
            case 11: registrarAsistencia(); break;
            case 12: consultarAsistencias(); break;
            case 13: historialDeAsistencias(); break;
        }
    } while(op != 0);
}

function opciones () {
    return '** OPCIONES **\n' +
        '1. Alta socios\n' +
        '2. Listar socio\n' +
        '3. Registrar clases\n' +
        '4. Listar clases\n' +
        '5. Buscar clases por nombre o instructor\n' +
        '6. Registrar inscripciones\n' +
        '7. Mostrar clases que tiene un socio\n' +
        '8. Mostrar los socios inscritos en una clase\n' +
        '9. Ver las clases con cupos disponibles.\n' +
        '10. Consultar cuántos socios hay inscritos por instructuror\n'+
        '11. Registrar asistencia\n'+
        '12. Consultar asistencia por clase\n'+
        '13. Historial de asistencias por socio\n'
}

menu();
