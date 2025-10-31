//Usuario, del que conoceremos su nombre, edad, teléfono y los libros que
//  tiene prestados (usar las estructura de datos que queráis). El usuario 
// podrá prestar un libro (añadirlo a la estructura de datos X) y devolver 
// un libro (lo quita de la estructura de datos X y le cambia el estado).

export class Usuario{
    nombre;
    edad;
    telefono;
    libros = [];

    constructor(nombre, edad = 1, telefono = ''){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        console.log("usuario creado");
    }

    prestarLibro = (libro) =>{
        if (libro.estado){
            this.libros.push(libro);
            libro.estado = false;
        } else {
            console.log("Libro no disponible");
        }
    }

    devolverLibro = (libro) => {
        if (this.libros.includes(libro)){
            this.libros = this.libros.filter(x => x !== libro);
            libro.estado = true;
        } else {
            console.log("Este libro no se te ha prestado");
        }
    }
}
