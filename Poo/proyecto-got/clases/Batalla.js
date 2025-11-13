
import { Guerrero  } from "./personajesEspeciales/Guerrero.js";
import { Casa  } from "./Casa.js";

export class Batalla {
    
    #casaA;
    #casaB;
    #muertos;

    constructor(casaA, casaB){
        this.#casaA = casaA;
        this.#casaB = casaB;
        this.#muertos = [];
    }

    iniciarBatalla(){
        let guerrerosA = this.obtenerGuerreros(this.#casaA);
        let guerrerosB = this.obtenerGuerreros(this.#casaB);

        this.batalla(guerrerosA, guerrerosB);
        
    }

    batalla(guerrerosA, guerrerosB){
        let totalGuerreros = guerrerosA.length + guerrerosB.length;
        let ultimoGanador;

        do{
            for (let guerreroA of guerrerosA){
                for (let guerreroB of guerrerosB){
                    if (guerreroA.estado && guerreroB.estado){
                        console.log(`Nuevo enfrentamiento: ${guerreroA.nombre} vs ${guerreroB.nombre}`);

                        guerreroA.atacar(guerreroB);
                        if (!guerreroB.estado) {
                            this.#muertos.push(guerreroB);
                            ultimoGanador = guerreroA;
                            continue;
                        };

                        guerreroB.atacar(guerreroA);
                        if (!guerreroA.estado) {
                            this.#muertos.push(guerreroA);
                            ultimoGanador = guerreroB;
                        };

                        console.log(`${guerreroA.nombre}: ${guerreroA.vida} | ${guerreroB.nombre}: ${guerreroB.vida} `);
                    }
                }
            }
        } while(this.comprobar(totalGuerreros));

        console.log(`La batalla ha sido ganada por la casa ${ultimoGanador.casa}`);
    }

    comprobar(totalGuerreros){
        return this.#muertos.length + 1 == totalGuerreros ? true : false;
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
        return guerreros;
    }

    mostrarGuerrerosMuertosEnBatalla(){
        console.log(this.#muertos);
        for (let guerrero of this.#muertos){
            console.log(guerrero);
        }
    }
}