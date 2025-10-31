/* el cual tendremos que conocer datos como el nombre, la edad, si está vivo
o muerto y saber a qué casa pertenece. El personaje debe ser capaz de 
presentarse en la primera fase, es decir, debe poder decir un mensaje 
del siguiente estilo: “Soy Jon Snow de la Casa Stark”, y además, puede 
también morir. Además, un personaje puede tener un Arma, por lo tanto, 
podremos equiparlo con una de estas.*/

import { Arma } from './Arma.js';

export class Personaje {
    #nombre;
    #edad;
    #estado;
    #casa;
    #arma;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#estado = "vivo";
        this.#casa = "";
        console.log("Personaje creado")
    }

    get nombre(){
        return this.#nombre;
    }

    set casa(nombreCasa){
        this.#casa = nombreCasa;
    }

    get casa(){
        return this.#casa;
    }

    presentarse = () => {
        return `Soy ${this.#nombre} de la Casa ${this.#casa}`;
    }

    set arma(arma){
        
        //comprueba si es un arma o no.
        // setea bien el arma.nombre
        console.log(`${this.#nombre} ha equipado el arma ${arma.nombre}`);
        this.#arma = arma;
    }


}