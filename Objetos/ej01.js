/*Crea un objeto persona con las propiedades nombre, edad y ciudad.
Luego muestra su contenido en consola.*/

let salario = "minimo";

let persona = {
    nombre: "Juan",
    edad: 50,
    ciudad: "Badajoz",
    [salario]: 900
};

persona["le gustan las aves"] = true;

console.log(persona);
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);
console.log(persona["le gustan las aves"]);
console.log(persona.minimo);