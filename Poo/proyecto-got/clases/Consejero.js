import { Personaje  } from "./Personaje.js";

export class Consejero extends Personaje{

    #especialidad;

    constructor(nombre, edad){
        super(nombre, edad);
        this.#especialidad = undefined;
    }

    luchar(){
        console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia.`);
    }

    aconsejar(rey){
        console.log(`${this.nombre} aconseja al rey ${rey.nombre} sobre ${this.#especialidad}`);
    }
}