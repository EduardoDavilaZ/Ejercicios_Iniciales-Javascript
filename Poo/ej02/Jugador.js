export class Jugador {
    nombre;
    vidas;
    fuerza;
    energia;
    velocidad;

    constructor(nombre){
        this.nombre = nombre;
        this.vidas = 3;
        this.fuerza = 100;
        this.velocidad = 20;
    }

    hablar = () => {
        console.log("Hola mundo, soy " + this.nombre);
    }

    disparar = () => {
        console.log("piw piw => => => ");
    }

    curar = () => {
        console.log("Me estoy cuando")
    }
}