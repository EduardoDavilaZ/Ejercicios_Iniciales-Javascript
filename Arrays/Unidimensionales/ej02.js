// Escribir el algoritmo que permita visualizar los elementos positivos de una tabla.

const array = [1, -4, 3, 9, -3, 2, -10, 5, -11]
visualizarPositivos()

function visualizarPositivos(){
    let texto = ""
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            texto += "<li>" + array[i] + "</li>"
        } 
    }

    document.getElementById('lista').innerHTML = texto
}