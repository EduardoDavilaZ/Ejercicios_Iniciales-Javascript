
let usuarios = new Map();
let libros = new Map();
let prestamos = new Map();

/* USUARIOS */

let altaUsuario = () => {
    alert("** ALTA USUARIO **");
    let id = 0;
    
    do{
        id = Number(prompt("Introduce el id: "));
        if (!usuarios.has(id) && id != 0){
            let datos = {};
            datos.nombre = prompt("Introduce el nombre: ");
            do {
                datos.email = prompt("Introduce el correo: ");
                if (buscarCorreo(datos.email)) {
                    console.log("Este correo ya está registrado.");
                }
            } while(buscarCorreo(datos.email));
            
            usuarios.set(id, datos);
            console.log(usuarios.get(id));
        } else {
            console.log("Error al registrar usuario.");
        }
    } while(id != 0);
}

let listarUsuarios = () => {
    for (let [id, datos] of usuarios.entries()){
        console.log(`ID: ${id} Nombre: ${datos.email} Correo: ${datos.email}`)
    }
}

let buscarCorreo = (correo) => {
    for (let valor of usuarios.values()){
        if (valor.email == correo){
            return true;
        }
    }
    return false;
}

/* LIBROS */

let altaLibro = () => {
    let id;

    do{
        id = Number(prompt("Id del libro: "));
        if (!libros.has(id) && id != 0){
            let datos = {};

            do{
                datos.titulo = prompt("Titulo: ");
            } while(buscarTitulo(datos.titulo));
            
            datos.autor = prompt("Autor: ");
            datos.año = prompt("Año: ");
            datos.categoria = prompt("Categoría: ");

            libros.set(id, datos);
            console.log(libros.get(id));
        } else {
            console.log("Error al agregar el libro.");
        }
    } while(id != 0);
}

let buscarTitulo = (titulo) => {
    for (let [indice, valor] of libros.entries()){
        if (valor.titulo == titulo){
            return true;
        }
    }
    return false;
}

let buscarLibro = () => {
    let nombre = prompt("Introduce el título o el autor: ");
    for (let [indice, valor] of libros.entries()){
        if (valor.titulo == nombre || valor.autor == nombre){
            console.log(libros.get(indice));
            return true;
        }
    }
    return false;
}

let agruparLibrosPorCategoria = () => {
    const categorias = new Map();
    for (let libro of libros.values()) {
        if (!categorias.has(libro.categoria)) {
            categorias.set(libro.categoria, [libro]);
        } else {
            categorias.get(libro.categoria).push(libro);
        }
    }
    
    for (let [indice, valor] of categorias.entries()){
        console.log("Categoría: " + indice);
        for (let libro of valor){
            console.log(libro);
        }
    }
}

/* PRÉSTAMOS */

let registrarPrestamo = () => {
    let idLibro;
    do{
        idLibro = Number(prompt("ID Libro: "));
        if (prestamos.get(idLibro) == undefined && libros.get(idLibro) != undefined){
            let datos = {};
            do{
                datos.idUsuario = Number(prompt("ID Usuario: "));
            } while(usuarios.get(datos.idUsuario) == undefined);
            datos.fecha = new Date();
            prestamos.set(idLibro, datos);
            console.log(prestamos.get(idLibro));
        }
    } while(idLibro != 0);
}

let listarPrestamos = () => {
    for (let [indice, valor] of prestamos.entries()){
        console.log(`ID Libro: ${indice} ID Usuario: ${valor.idUsuario} Fecha: ${valor.fecha}`);
    }
}

let librosPorUsuario = () => {
    for (let [i, usuario] of usuarios.entries()) {
        console.log("Nombre: " + usuario.nombre);
        for (let [j, prestamo] of prestamos.entries()){
            if (prestamo.idUsuario == i){
                console.log(libros.get(j));
            }
        }
    }
}

/* MENÚ */

function menu () {
    let op;
    do {
        op = Number(prompt(opciones() + "Introduce una opción: "));
        switch(op){
            case 1: altaUsuario(); break;
            case 2: listarUsuarios(); break;
            case 3: altaLibro(); break;
            case 4: buscarLibro(); break;
            case 5: agruparLibrosPorCategoria(); break;
            case 6: registrarPrestamo(); break;
            case 7: listarPrestamos(); break;
            case 8: librosPorUsuario(); break;
        }
    } while(op != 0);
}

function opciones () {
    return 'OPCIONES\n' + 
        '1. Alta de usuario\n' +
        '2. Listar usuarios\n' + 
        '3. Alta de libro\n' + 
        '4. Buscar libro\n'+ 
        '5. Agrupar libros por categoria\n'+ 
        '6. Registrar préstamo\n'+ 
        '7. Listar préstamo\n' +
        '8. Libros por usuario\n';
}

menu();