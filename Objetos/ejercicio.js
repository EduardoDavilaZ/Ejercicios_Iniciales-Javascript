/*Define un objeto agenda que tenga las siguientes propiedades iniciales*/

let agenda = {
    nombre: 'printf("Eduardo");',
    tareas: [
        {descripcion: "Web sobre cambio climático", prioridad: 1, estado: "pendiente"},
        {descripcion: "Ejercicio práctico de Javascript", prioridad: 2, estado: "pendiente"},
        {descripcion: "Presentación ODS", prioridad: 3, estado: "completada"},
        {descripcion: "Contextualización del sector productivo", prioridad: 2, estado: "completada"}
    ]
};

/*Al objeto agenda añade los siguientes métodos*/

agenda.agregarTarea = (descripcion, prioridad) => {
    if (typeof descripcion == "string" && typeof prioridad == "number"){
        agenda.tareas.push({descripcion: descripcion, prioridad: prioridad, estado: "pendiente"});
        return true;
    }
    return false;
}

agenda.listarTareas = () => {
    for (let tarea of agenda.tareas){
        console.log(tarea);
    }
}

agenda.marcarCompletada = (indice) => {
    if (indice > agenda.tareas.length - 1){
        return false;
    } else {
        agenda.tareas[indice].estado = "completada";
        return true;
    }
}

agenda.eliminarTarea = (indice) => {
    let eliminado = agenda.tareas.splice(indice, 1);
    if (eliminado.length > 0){
        console.log("Eliminado: " + eliminado[0]);
        return true;
    }
    return false;
}

agenda.listarPendientes = () => {
    for (let tarea of agenda.tareas){
        if (tarea.estado == "pendiente"){
            console.log(tarea);
        }
    }
}

agenda.ordenarPorPrioridad = () => {
    agenda.tareas.sort((a, b) => a.prioridad - b.prioridad);
}

let agregar = () => {
    let descripcion = prompt("Descripción: ");
    let prioridad = Number(prompt("Prioridad (1 = alta, 2 = media, 3 = baja): "));
    agenda.agregarTarea(descripcion, prioridad) ? console.log("Agregada con éxito") : console.log("Algo falló");
}

let completar = () => {
    let indice = Number(prompt("Introduce el índice: "));
    agenda.marcarCompletada(indice) ? console.log("Marcada como completada") : console.log("Algo falló");
}

let eliminar = () => {
    let indice = Number(prompt("Introduce el índice: "));
    agenda.eliminarTarea(indice) ? console.log("Eliminado con éxito") : console.log("Algo falló");
}

function opciones (){
    alert("** OPCIONES **\n 1. Agregar \n 2. Listar \n 3. Completar \n 4. Eliminar \n 5. Listar pendientes \n 6. Ordenar por prioridad");
}

function menu (){
    let op;
    do{
        opciones();
        op = Number(prompt("Introduce la opción: "));
        switch (op){
            case 1: agregar(); break;
            case 2: agenda.listarTareas(); break;
            case 3: completar(); break;
            case 4: eliminar(); break;
            case 5: agenda.listarPendientes(); break;
            case 6: agenda.ordenarPorPrioridad(); break;
        }
    } while (op != 0)
}

menu();