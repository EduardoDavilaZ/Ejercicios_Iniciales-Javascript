/*De la casa deberemos de guardar información tal como el nombre, el 
lema y los miembros que conforman dicha casa. Podremos añadir 
miembros en esta primera fase, así como ver quienes pertenecen 
también a la casa.*/

import { Personaje } from './Personaje.js';

export class Casa {
    #nombre;
    #lema;
    #miembros = [];

    constructor(nombre = "", lema = ""){
        this.#nombre = nombre;
        this.#lema = lema;
        console.log("Casa creada");
    }

    añadirMiembros = (personaje) => {
        if (!(personaje instanceof Personaje)){
            console.log("No es un personaje");
            return false;
        }

        this.#miembros.push(personaje);
        console.log(`${personaje.nombre} ha sido añadido a la casa ${this.#nombre}`);
        
        personaje.casa = this.#nombre;
        return true;
    }

    listarMiembros = () => {
        console.log("Miembros de la casa " + this.#nombre);
        for (let miembro of this.#miembros){
            console.log("- Casa " + miembro.nombre);
        }
    }

    get nombre(){
        return this.#nombre;
    }

    get miembros(){
        return this.#miembros;
    }
}