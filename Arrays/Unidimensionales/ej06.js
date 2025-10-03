// Se dispone de una lista (vector) de 15 elementos. Se desea diseñar un algoritmo que permita
// insertar el valor x en el lugar k-ésimo de la mencionada lista.


const array = Array(15)
inicializarArray()
mostrar()

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function inicializarArray(){
    for(let i=0; i<array.length; i++){
        array[i] = aleatorio(1, 50)
    }
}

function mostrar(){
    let texto = ""

    for (let i=0; i<array.length; i++){
        texto += "<li>" + array[i] + "</li>"
    }

    document.getElementById('lista').innerHTML = texto
}

function insertar(){
    let num = parseInt(document.getElementById('numero').value)
    let pos = parseInt(document.getElementById('posicion').value)

    array.splice(pos, 1, num)
    mostrar()
}
