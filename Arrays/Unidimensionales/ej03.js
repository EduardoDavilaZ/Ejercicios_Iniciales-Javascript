// Escribir el algoritmo que permita contar el número de elementos positivos y negativos de una tabla
// T [5].

let array = [4, 1, -5, 3, -2]

contar()

function contar(){
    let pos = 0, neg = 0
    let texto = ""

    for (let i = 0; i < array.length; i++){
        if (array[i] >= 0){
            pos++;
        } else {
            neg++;
        }   
    }

    texto += 
            "<li>Positivos = " + pos + "</li>" +
            "<li>Negativos = " + neg + "</li>"

    document.getElementById('lista').innerHTML = texto
}

