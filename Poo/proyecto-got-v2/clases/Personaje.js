/* el cual tendremos que conocer datos como el nombre, la edad, si está vivo
o muerto y saber a qué casa pertenece. El personaje debe ser capaz de 
presentarse en la primera fase, es decir, debe poder decir un mensaje 
del siguiente estilo: “Soy Jon Snow de la Casa Stark”, y además, puede 
también morir. Además, un personaje puede tener un Arma, por lo tanto, 
podremos equiparlo con una de estas.*/

export class Personaje {
    #nombre;
    #edad;
    #estado;
    #casa;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#estado = true;
        this.#casa = "";
        console.log("Personaje creado")
    }

    presentarse = () => {
        console.log(`Soy ${this.#nombre} de la Casa ${this.#casa}`); 
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get estado(){
        return this.#estado;
    }

    set estado(estado){
        this.#estado = estado;
    }

    get casa(){
        return this.#casa;
    }

    set casa(nombreCasa){
        this.#casa = nombreCasa;
    }
}