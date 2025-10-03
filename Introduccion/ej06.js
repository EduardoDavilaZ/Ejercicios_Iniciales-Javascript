// Ejercicio 6: Tabla de multiplicar

let tabla = document.getElementById("tabla");

let n = 7;

for (let i = 1; i <= 10; i++){
    tabla.innerHTML += 
        "<tr>" +
            "<td>" + n + "<td>" +
            "<td> x <td>" +
            "<td>" + i + "<td>" +
            "<td> = <td>" +
            "<td> " + (n*i) + "<td>" +
        "</tr>";
}
