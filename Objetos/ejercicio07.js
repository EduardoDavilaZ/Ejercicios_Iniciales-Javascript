const peliculas = [
{
    titulo: "Inception",
    anio: 2010,
    genero: "Ciencia Ficción",
    recaudacion: 480,
    director: {
    nombre: "Christopher Nolan",
    pais: "Reino Unido",
    },
    actores: [
        { nombre: "Leonardo DiCaprio", nacionalidad: "EE.UU.", edad: 48 },
        { nombre: "Joseph Gordon-Levitt", nacionalidad: "EE.UU.", edad: 42 },
        { nombre: "Elliot Page", nacionalidad: "Canadá", edad: 38 },
    ],
},
{
    titulo: "Interstellar",
    anio: 2014,
    genero: "Ciencia Ficción",
    recaudacion: 497,
    director: {
        nombre: "Christopher Nolan",
        pais: "Reino Unido",
    },
    actores: [
        { nombre: "Matthew McConaughey", nacionalidad: "EE.UU.", edad: 55 },
        { nombre: "Anne Hathaway", nacionalidad: "EE.UU.", edad: 42 },
        { nombre: "Jessica Chastain", nacionalidad: "EE.UU.", edad: 48 },
    ],
},
{
    titulo: "Parasite",
    anio: 2019,
    genero: "Drama",
    recaudacion: 258,
    director: {
        nombre: "Bong Joon-ho",
        pais: "Corea del Sur",
    },
    actores: [
        { nombre: "Song Kang-ho", nacionalidad: "Corea del Sur", edad: 57 },
        { nombre: "Cho Yeo-jeong", nacionalidad: "Corea del Sur", edad: 44 },
        { nombre: "Choi Woo-shik", nacionalidad: "Corea del Sur", edad: 35 },
    ],
},
{
    titulo: "Pulp Fiction",
    anio: 1994,
    genero: "Crimen",
    recaudacion: 214,
    director: {
        nombre: "Quentin Tarantino",
        pais: "EE.UU.",
    },
    actores: [
        { nombre: "John Travolta", nacionalidad: "EE.UU.", edad: 70 },
        { nombre: "Uma Thurman", nacionalidad: "EE.UU.", edad: 55 },
        { nombre: "Samuel L. Jackson", nacionalidad: "EE.UU.", edad: 76 },
    ],
},
{
    titulo: "Amélie",
    anio: 2001,
    genero: "Comedia",
    recaudacion: 174,
    director: {
        nombre: "Jean-Pierre Jeunet",
        pais: "Francia",
    },
    actores: [
        { nombre: "Audrey Tautou", nacionalidad: "Francia", edad: 48 },
        { nombre: "Mathieu Kassovitz", nacionalidad: "Francia", edad: 57 },
    ],
    },
];

// /Ejercicio 1.
// Muestra las películas estrenadas después del año 2000 pero antes o iguales al 2015, agrupadas por género.
// 📍 (1 punto)

let peliculasFiltradas = peliculas.filter(x => x.anio > 2000 && x.anio <= 2015);
let objGeneros = {};

for (let pelicula of peliculasFiltradas){
    if (!objGeneros.hasOwnProperty(pelicula.genero)){
        objGeneros[pelicula.genero] = pelicula.titulo;
    } else {
        objGeneros[pelicula.genero] += ' ' +pelicula.titulo;
    }
}

//console.log(objGeneros);

// Ejercicio 2.
// Agrupa los directores por país en una nueva estructura de datos.
// 📍 (1 punto)

let directores = new Set(peliculas.map(x => JSON.stringify(x.director)));
let objDirectores = {};

for (let dir of directores.values()){
    let obj = JSON.parse(dir);
    objDirectores[obj.nombre] = obj.pais;
}

//console.log(objDirectores);

// Ejercicio 3.
// Crea una nueva estructura de datos con todos los actores sin repetir, incluyendo su nombre, nacionalidad y edad, y ordénalos por edad descendente.
// 📍 (2 puntos)

let actores = peliculas.flatMap(x => x.actores).sort((a, b) => b.edad - a.edad);
let setActores = new Set(actores.map(x => JSON.stringify(x)));
for (let ac of setActores.values()){
    let obj = JSON.parse(ac);
    //console.log('Nombre: ' + obj.nombre + ' Nacionalidad: ' + obj.nacionalidad + ' Edad: ' + obj.edad);
}

// Ejercicio 4.
// Crea una función que devuelva un objeto con los géneros como claves y la cantidad de películas distintas por género como valor.
// 📍 (1 punto)

let obtenerGeneros = () => {
    let generos = {};
    for (let peli of peliculas){
        if (!generos.hasOwnProperty(peli.genero)){
            generos[peli.genero] = 1;
        } else {
            generos[peli.genero] += 1;
        }
    }
    return generos;
}

//console.log(obtenerGeneros());

// Ejercicio 5.
// Crea una función que indique qué película tiene la mayor recaudación sin superar los 500 millones de dólares, y que se aproxime más a ese límite sin pasarlo.
// 📍 (2 puntos)

let mayorRecaudacion = () => {
    let peliculasOrdenadas = peliculas.sort((a, b) => b.recaudacion - a.recaudacion);
    for (let peli of peliculasOrdenadas){
        if (peli.recaudacion < 500){
            return peli;
        }
    }
}

console.log(mayorRecaudacion())