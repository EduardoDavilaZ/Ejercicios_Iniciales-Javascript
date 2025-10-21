/*
1. Gestión del Cine

Crea un sistema para administrar una cartelera de cine.

Datos de cada película:

id (único)
título
director
género
año

Requisitos:

Añadir una película (sin repetir id ni título).
Buscar películas por director o género.
Listar todas las películas ordenadas por año.
Mostrar cuántas películas hay por género.
Permitir marcar una película como “en cartelera” o “fuera de cartelera”.
Mostrar las películas actualmente en cartelera.
*/

let peliculas = new Map();

let altaPelicula = () => {
    let id;
    do{
        id = Number(prompt("Introduce el id: "));
        if (!peliculas.has(id) && id != 0){
            let datos = {};
            do{
                datos.titulo = prompt("Título: ");
            } while (buscarTitulo(datos.titulo));
            datos.director = prompt("Director: ");
            datos.genero = prompt("Género: ");
            datos.año = Number(prompt("Año: "));
            console.log(datos);
            peliculas.set(id, datos);
        } else {
            console.log("ERROR");
        }
    } while(id != 0);
}

let buscarTitulo = (titulo) => {
    for (let datos of peliculas.values()){
        if (datos.titulo == titulo){
            console.log("Título existente");
            return true;
        }
    }
    return false;
}

let buscarPelicula = () => {
    let nombre = prompt("Introduce un director o genero");
    for (let datos of peliculas.values()){
        if (datos.director == nombre || datos.genero == nombre){
            console.log(datos);
        }
    }
}


let ordenarPeliculas = () => {
    let peliculasOrdenadas = new Map (
        [...peliculas.entries()].sort((a, b) => a[1].año - b[1].año)
    );

    for (let pelicula of peliculasOrdenadas.values()){
        console.log(pelicula);
    }
}

let mostrarPorGenero = () => {
    let peliculasOrdenadas = new Map (
        [...peliculas.entries()].sort((a, b) => (a[1].genero).localeCompare(b[1].genero))
    );

    for (let pelicula of peliculasOrdenadas.values()){
        console.log(pelicula);
    }
}


let marcarPelicula = () => {
    let id = Number(prompt("ID de la película"));
    let estado = prompt("Estado: ");

    let pelicula = peliculas.get(id);
    pelicula.estado = estado;
}

let mostrarPeliculasEnCartelera = () => {
    for (let pelicula of peliculas.values()){
        if (pelicula.estado == "en cartelera"){
            console.log(pelicula);
        }
    }
}

function menu () {
    let op;
    do{
        op = Number(prompt(`${opciones()} Introduce la opción.`));
        switch (op){
            case 1: altaPelicula(); break;
            case 2: buscarPelicula(); break;
            case 3: ordenarPeliculas(); break;
            case 4: mostrarPorGenero(); break;
            case 5: marcarPelicula(); break;
            case 6: mostrarPeliculasEnCartelera(); break;
        }
    } while(op != 0);
}

function opciones () {
    return '** OPCIONES **\n' +
    '1. Alta de película\n' +
    '2. Buscar película\n' +
    '3. Ordenar películas\n' +
    '4. Mostrar por género\n'+
    '5. Marcar película\n'+
    '6. Mostrar películas en cartelera\n';
}

menu();