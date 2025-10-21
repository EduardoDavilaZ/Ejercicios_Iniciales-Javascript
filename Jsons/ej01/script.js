const producto = {
    id: 101,
    nombre: "Teclado",
    precio: 50.99,
    disponible: true,
    categorias: ["perifericos", "oficina"],
    detalles: {
        marca: "logitech",
        garantia: "2 años"
    }
}

/* 2 */

let cadena = JSON.stringify(producto);

/* 3 */

localStorage.setItem("producto", cadena);

/* 4 */

let obj = JSON.parse(localStorage.getItem("producto"))
for (let clave in obj) {
    console.log(clave + ": " + obj[clave]);
    if (typeof obj[clave] == "object"){
        for (let valor in obj[clave]){
            console.log(valor + ': ' + obj[clave][valor])
        }
    }
}

/* 5 */

console.log('Tipo del objeto original: ' + typeof producto);
console.log('Tipo del textoJSON: ' + typeof cadena);