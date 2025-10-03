// Ejercicio 3: Número par o impar

let n = Number(prompt("Número: "));

let esPar = (n) => {
    return n % 2 == 0 ? true : false;
}

esPar(n) ? alert("Es par") : alert("Es impar");