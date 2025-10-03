// Se dispone de una lista de 10 números enteros. Calcular su valor máximo y el orden que ocupan en
// la tabla.

const array = Array(15)
inicializarArray()

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function inicializarArray(){
    for (let i=0; i<array.length; i++){
        array[i] = aleatorio(1, 50)
    }
}

function mostrar(){
    let texto = ""
    let max = array[0]
    let pos = 0

    for (let i=0; i<array.length; i++){
        texto += "<li>" + array[i] + "</li>"
        if (array[i] > max){
            max = array[i]
            pos = i
        }
    }

    document.getElementById('lista').innerHTML = texto
    document.getElementById('numero').value = max
    document.getElementById('posicion').value = pos
}