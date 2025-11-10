
import { Guerrero  } from "./Guerrero.js";
import { Casa } from "./Casa.js";

export class Batalla {
    
    #casaA;
    #casaB;
    #muertos;

    constructor(casaA, casaB){
        this.casaA = casaA;
        this.casaB = casaB;
    }

    iniciarBatalla(){
        let guerrerosA = obtenerGuerreros(this.casaA);
        let guerrerosB = obtenerGuerreros(this.casaB);

        batalla(guerrerosA, guerrerosB);
        this.mostrarGuerrerosMuertosEnCombate();
    }

    batalla(guerrerosA, guerrerosB){
        for (let guerreroA of guerrerosA){
            for (let guerreroB of guerrerosB){
                console.log(`Nuevo enfrentamiento: ${guerreroA.nombre} vs ${guerreroB.nombre}`);

                guerreroA.atacar(guerreroB);
                if (!guerreroB.estado) {
                    this.#muertos.push(guerreroB);
                    guerrerosB.pop(guerreroB);
                };

                guerreroB.atacar(guerreroA);
                if (!guerreroA.estado) {
                    this.#muertos.push(guerreroA);
                    guerrerosA.pop(guerreroB);
                };

                console.log(`${guerreroA.nombre}: ${guerreroA.vida} | ${guerreroB.nombre}: ${guerreroB.vida} `);
            }
        }
    }

    obtenerGuerreros(casa){
        let guerreros = [];
        console.log(`Los guerreros que pelearán de la casa ${casa.nombre} serán los siguientes`);
        for (let miembro of casa.miembros){
            if (miembro instanceof Guerrero){
                guerreros.push(miembro);
            }
        }
        console.log(guerreros);
    }

    mostrarGuerrerosMuertosEnBatalla(){
        console.log(this.#muertos);
    }

}