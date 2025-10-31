import { Usuario } from "./Usuario.js";

export class UsuarioVip extends Usuario {
    membresia;

    constructor(nombre, edad = 1, telefono = '', membresia){
        super(nombre, edad, telefono);
        this.membresia = membresia;
    }

}