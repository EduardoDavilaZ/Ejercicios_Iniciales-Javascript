// Calcular el número de elementos negativos, cero y positivos de un vector dado de 10 elementos.

const array = [1, 4, -3, 2, -5, 0, -1, 0, 10, 9]

contar()

function contar(){
    let pos = 0, neg = 0, cero = 0
    let texto = ""

    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            pos++
        } else if(array[i] < 0){
            neg++
        } else {
            cero++
        }
    }

    texto +=
        "<li> Positivos: " + pos + "</li>" +
        "<li> Negativos: " + neg + "</li>" +  
        "<li> Ceros: " + cero + "</li>"

    document.getElementById('lista').innerHTML = texto
}