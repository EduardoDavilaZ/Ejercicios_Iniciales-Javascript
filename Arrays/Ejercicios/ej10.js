/**
 * 10. Se realizó un censo provincial y se desea procesar la información obtenida en
 * dicho censo. De cada una de las personas censadas se tiene la siguiente
 * información: número de documento, edad y sexo ('femenino' o 'masculino').
 * Se pide confeccionar un programa que lea los datos de cada persona censada (para
 * finalizar ingresar el valor cero en el número de documento) e informar:

 * a) Cantidad total de personas censadas.
 * b) Cantidad de varones.
 * c) Cantidad de mujeres.
 * d) Cantidad de varones cuya edad varía entre 16 y 65 años.
 */

let personas = [];

let introducir = (personas) => {
    let persona = {};
    do{
        persona = {};
        persona.nDoc = Number(prompt("Número de documento: "));
        if(persona.nDoc != 0){
            persona.edad = Number(prompt("Edad: "));
            persona.sexo = prompt("Sexo: ");
            personas.push(persona);
        }
    } while(persona.nDoc != 0);
}

let mostrarCantidad = (personas) => {
    return personas.length;
}

let cantMujeres = (personas) => {
    return (personas.filter(x => x.sexo == 'f')).length;
}

let cantHombres = (personas) => {
    return (personas.filter(x => x.sexo == 'm')).length;
}

let cantHombresAdultos = (personas, a, b) => {
    return (personas.filter(x => x.sexo == 'm' && x.edad > a && x.edad < b)).length;
}

introducir(personas);
console.log("Cantidad de personas: " + mostrarCantidad(personas));
console.log("Cantidad de mujeres: " + cantMujeres(personas));
console.log("Cantidad de hombres: " + cantHombres(personas));
console.log("Cantidad de adultos: " + cantHombresAdultos(personas, 16, 65));