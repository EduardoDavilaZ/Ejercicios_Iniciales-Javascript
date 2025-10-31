import { Libro } from "./Libro.js";
import { Usuario } from "./Usuario.js";
import { Biblioteca } from "./Biblioteca.js";


let libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry");
let libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");

let usuario1 = new Usuario("Fernando", 23, '900000000');

let biblioteca = new Biblioteca("Blblioteca Central");

/*
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.registrarUsuario(usuario1);

biblioteca.mostrarLibrosDisponibles();

usuario1.prestarLibro(libro1);
biblioteca.mostrarLibrosDisponibles();

usuario1.devolverLibro(libro1);
biblioteca.mostrarLibrosDisponibles();*/

