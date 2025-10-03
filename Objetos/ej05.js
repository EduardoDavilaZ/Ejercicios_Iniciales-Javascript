/*Escribe una función filtrarPorTipo(obj, tipo) que devuelva un nuevo 
objeto solo con las propiedades cuyo valor es del tipo indicado.*/

let datos = { 
    nombre: "Ana", 
    edad: 25, 
    activo: true, 
    salario: 1200
};

let filtrarPorTipo = (datos, type) => {
    let obj = {};
    for (let key in datos){
        if (typeof datos[key] == type){
            obj[key] = datos[key];
        }
    }
    return obj;
};

console.log(filtrarPorTipo(datos, "number"));