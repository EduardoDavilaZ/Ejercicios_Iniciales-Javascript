// Escribir un algoritmo que permita calcular el cuadrado de los 10 primeros números enteros y a
// continuación escribir una tabla que contenga dichos 10 números cuadrados.


crearTabla()

function crearTabla(){
    const array = new Array(10)
    let texto = ""

    for (let i = 0; i < array.length; i++){
        texto += 
            "<tr>" + 
                "<td> " + i + "</td>" +
                "<td> " + i*i + "</td>" +
            '</tr>'
    }

    document.getElementById('table').innerHTML = texto
}