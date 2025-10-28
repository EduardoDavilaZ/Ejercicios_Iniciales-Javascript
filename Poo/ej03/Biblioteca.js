//Biblioteca, la cual contendrá muchos libros y muchos usuarios. Un usuario 
// puede tener varios libros y además, podremos saber si un libro está 
// disponible o no.

export class Biblioteca{
    nombre;
    libros;
    usuarios;

    constructor (nombre) {
        this.nombre = nombre;
        this.libros = [];
        this.usuarios = [];
        console.log("biblioteca creada");
    }

    agregarLibro = (libro) => {
        this.libros.push(libro);
    }

    registrarUsuario = (usuario) => {
        this.usuarios.push(usuario);
    }

    mostrarLibrosDisponibles = () => {
        for (let libro of this.libros){
            if (libro.estado == false){
                console.log(libro.toString());
            }
        }
    }

}