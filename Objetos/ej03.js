/*Crea un objeto animal con propiedades tipo, nombre y edad.
Elimina la propiedad edad y muestra el resultado.*/

let animal = {
    tipo: "Mamífero",
    nombre: "Gato",
    edad: 5
}

console.log(animal);

delete animal.edad;

console.log(animal);