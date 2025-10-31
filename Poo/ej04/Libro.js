//Libro, que tendrá un título, un autor y tendremos que saber si el libro 
// está disponible o no. También podremos mostrar la información del libro,
//  podremos prestarlo y devolverlo (ambas funciones tendrán que cambiar 
// el estado del libro, es decir, saber si está disponible o no).

export class Libro{
    titulo;
    autor;
    disponible;

    constructor(titulo, autor, disponible = true){
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
        console.log("libro creado");
    }

    set estado (estado) {
        this.disponible = estado;
    }

    get estado () {
        return this.disponible;
    }

    toString = () => {
        let disponible = this.disponible == true ? 'sí' : 'no'; 
        return 'Título: ' + this.titulo + ' Autor: ' + this.autor + ' Disponible: ' + disponible;
    }

}