
import { Guerrero  } from "./personajesEspeciales/Guerrero.js";
import { Casa  } from "./Casa.js";

export class Batalla {
    
    #casaA;
    #casaB;
    #muertos;

    constructor(){
        this.#casaA = null;
        this.#casaB = null;
        this.#muertos = [];
    }

    iniciarBatalla = (casaA, casaB) => {
        if (!(casaA instanceof Casa) || !(casaB instanceof Casa)){
            console.log("No es una casa");
            return false;
        } else {
            this.#casaA = casaA;
            this.#casaB = casaB;
        }

        let guerrerosA = this.obtenerGuerreros(this.#casaA);
        let guerrerosB = this.obtenerGuerreros(this.#casaB);

        this.batalla(guerrerosA, guerrerosB);
        
    }

    batalla = (guerrerosA, guerrerosB) => {
        let totalGuerreros = guerrerosA.length + guerrerosB.length;
        console.log(totalGuerreros);
        let ultimoGanador;
        let i = 0, j = 0;

        while(this.#muertos.length < totalGuerreros){
            let guerreroA = guerrerosA[i];
            let guerreroB = guerrerosB[j];

            if (!guerreroA || !guerreroB) break;

            console.log(`Nuevo enfrentamiento: ${guerreroA.nombre} vs ${guerreroB.nombre}`);
            guerreroA.atacar(guerreroB);
            if (!guerreroB.estado) {
                this.#muertos.push(guerreroB);
                ultimoGanador = guerreroA;
                j++;
                continue;
            };

            guerreroB.atacar(guerreroA);
            if (!guerreroA.estado) {
                this.#muertos.push(guerreroA);
                ultimoGanador = guerreroB;
                i++;
            };

            console.log(`${guerreroA.nombre}: ${guerreroA.vida} | ${guerreroB.nombre}: ${guerreroB.vida} `);
        }

        console.log(`La batalla ha sido ganada por la casa ${ultimoGanador.casa}`);
    }

    obtenerGuerreros = (casa) => {
        let guerreros = [];
        console.log(`Los guerreros que pelearán de la casa ${casa.nombre} serán los siguientes`);
        for (let miembro of casa.miembros){
            if (miembro instanceof Guerrero){
                guerreros.push(miembro);
            }
        }
        console.log(guerreros);
        return guerreros;
    }

    mostrarGuerrerosMuertosEnBatalla = () => {
        console.log(this.#muertos);
        for (let guerrero of this.#muertos){
            console.log(guerrero);
        }
    }
}