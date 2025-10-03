// Se dispone de una tabla T de 15 números reales distintos de cero. Crear una nueva tabla en la que
// todos sus elementos resulten de dividir los elementos de la tabla T por el elemento T(K), siendo K
// un valor dado.

let array = new Array(15)
inicializarArray()

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inicializarArray(){
    for (let i=0; i<array.length; i++){
        array[i] = aleatorio(1, 50)
    }
}

function obtenerNumero(){
    let n = parseInt(document.getElementById('numero').value)
    if (n > 14 || n < 0){
        alert("Numero incorrecto")
        return -1
    }
    return n
}

function mostrarTabla(){
    let texto = ""
    let n = obtenerNumero()
    if (n == -1) return

    for (let i=0; i<array.length; i++){
        texto += 
            "<tr>" + 
                "<td>" + array[i] + "</td>" + 
                "<td>" + array[i] / n + "</td>" + 
            "</tr>"
    }

    document.getElementById('table').innerHTML = texto
}