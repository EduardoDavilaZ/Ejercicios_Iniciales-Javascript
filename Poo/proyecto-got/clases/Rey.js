
import { Personaje  } from "./Personaje.js";

export class Rey extends Personaje{

    #añosReinado;

    constructor(nombre, edad, añosReinado){
        super(nombre, edad);
        this.#añosReinado = añosReinado;
    }

    luchar(){
        console.log(`${this.nombre} lidera la batalla y anima a sus tropas.`);
    }

    gobernar(){
        console.log(`${this.nombre} gobierna con sabiduría desde hace ${this.#añosReinado} años.`);
    }

}