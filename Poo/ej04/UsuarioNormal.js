import { Usuario } from "./Usuario.js";

export class UsuarioNormal extends Usuario{
    correo;
    cpostal;

    constructor(nombre, edad = 1, telefono = '', correo = '', cpostal = 0){
        super(nombre, edad, telefono);
        this.correo = correo;
        this.cpostal = cpostal;
    }

    datosContacto = () => {
        console.log('Telefono: ' + super.telefono + ' Correo: ' + this.correo + ' Código postal: ' + this.cpostal);
    }
}