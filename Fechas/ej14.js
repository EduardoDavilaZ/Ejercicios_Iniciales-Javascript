/**
 *  Escriba una función que devuelva la fecha del próximo cumpleaños de una persona en formato "dd/mm/yyyy".
 */

let fechaNacimiento = new Date(2006, 5, 11);

let proximoCumpleaños = (fechaNacimiento) => {
    let cumple = new Date(fechaNacimiento);
    cumple.setFullYear(new Date().getFullYear()); /* Cambiar al año actual */
    return cumple.toLocaleDateString();
};

console.log(proximoCumpleaños(fechaNacimiento));
