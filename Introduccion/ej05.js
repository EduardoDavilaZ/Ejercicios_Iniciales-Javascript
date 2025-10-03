// Ejercicio 5: Array de colores favoritos

let colores = ["amarillo", "verde", "rojo", "azul"];
let result;

do {
    alert(colores);
    result = confirm("Agregar color?");
    if (result){
        let colorNuevo = prompt("Nuevo color: ");
        colores.push(colorNuevo);
    }
} while(result == true);

