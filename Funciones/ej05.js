/*Desarrollar una función que retorne la cantidad de dígitos que tiene una
variable entera positiva.*/

let digitos = (n) => {
    let d = 0;
    let m = 1;
    do{
        if ((n / m) > 1){
            m *= 10;
            d++;
        } else {
            return d;
        }
    } while(true);
}

let num = Number(prompt("Introduce: "));
alert(digitos(num));