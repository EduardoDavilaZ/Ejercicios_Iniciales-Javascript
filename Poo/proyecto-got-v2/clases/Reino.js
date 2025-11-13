/*Del reino deberemos guardar el nombre, las casas y el rey (puede 
ser un Personaje). Deberemos ser capaces de poder agregar 
una casa, listar las casas y mostrar información del rey.*/

import { Casa } from './Casa.js';
import { Rey  } from "./personajesEspeciales/Rey.js";

export class Reino {
    #nombre;
    #casas = [];
    #rey;

    constructor(nombre = "", rey){
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = rey;
        console.log("reino creado");
    }

    agregarCasa = (casa) => {
        if (!(casa instanceof Casa)) {
            console.log("Esa no es una casa");
            return false;
        };
        this.#casas.push(casa);
        console.log(`La Casa ${casa.nombre} ha sido añadida al reino de ${this.#nombre}`);
        return true;
    }

    listarCasas = () => {
        console.log("Casas del Reino de " + this.#nombre);
        for (let casa of this.#casas){
            console.log("- Casa " + casa.nombre);
        }
    }

    obtenerReyActual = () => {
        console.log("Rey actual: ");
        console.log(`El rey actual es ${this.#rey.nombre} de la casa ${this.#rey.nombre}`);
    }

    get rey(){
        return this.#rey;
    }

    set rey(rey){
        if (!(rey instanceof Rey)) {
            console.log("Ese no es un Rey");
            return false;
        };
        this.#rey = rey;
        console.log(`${rey.nombre} ha sido proclamado rey de ${this.#nombre}`);
    }
}