
import { Personaje  } from "../Personaje.js";
import { Arma  } from "../Arma.js";

export class Guerrero extends Personaje {

    #arma;
    #vida;

    constructor(nombre, edad, estado, arma){
        super(nombre, edad, estado);
        this.#arma = arma;
        this.#vida = 100;
    }

    set arma(arma){
        if (!(arma instanceof Arma)){
            console.log("No es un arma");
            return;
        }

        console.log(`${this.nombre} ha equipado el arma ${arma.nombre}`);
        this.#arma = arma;
    }

    set vida(vida){
        this.#vida = vida;
    }

    get vida(){
        return this.#vida;
    }

    luchar = () => {
        console.log(`${this.nombre} ataca con su ${this.#arma.nombre}, causando ${this.#arma.daño} puntos.`);
    }

    recibirDaño = (puntos) => {
        this.#vida -= puntos;
        if (this.#vida <= 0){
            this.#vida = 0;
            this.morir();
        }
    }

    atacar = (objetivo) => {
        let daño = Math.floor(this.#arma.daño * (0.7 + Math.random() * 0.6));
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de daño.`);
        objetivo.recibirDaño(daño);
    }

    entrenar = () => {
        console.log(`${this.nombre} entrena sin descanso para la próxima batalla.`);
    }

    morir = () => {
        this.estado = false;
        console.log(`${this.nombre} ha muerto.`);
    }
}
