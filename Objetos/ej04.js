/*Crea un objeto empresa que contenga dentro otro objeto 
direccion con propiedades calle, numero y ciudad.*/

let empresa = {
    nombre: "THB Hotels",
    direccion : {
        calle: "Calle San Juan",
        numero: 14,
        ciudad: "Mallorca"
    }
};

console.log(empresa);
console.log(empresa.direccion);

for (let i in empresa){
    console.log(empresa[i]);
}