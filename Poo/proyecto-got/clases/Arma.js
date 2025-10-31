/*Guardaremos información sobre las armas de cada personaje, 
tales como el nombre, el daño, y el tipo (arco, espada,daga…).
En esta primera fase, el arma tendrá una función “despcrición( )”
que nos muestre un texto con las características.*/

export class Arma {
    #nombre;
    #daño;
    #tipo;

    constructor(nombre = "", daño = 0, tipo = ""){
        this.#nombre = nombre;
        this.#daño = daño;
        this.#tipo = tipo;
    }

    descripcion = () => {
        return `${this.#nombre} (${this.#tipo}) - daño: ${this.#daño}`;
    }

    get nombre(){
        return this.#nombre;
    }
}
