/*Confeccionar un programa que muestre en que cuatrimestre del año nos
encontramos. Para esto obtener el mes.*/

let mes = Number(prompt("Mes: "));

let cuatrimestre = (mes) => {
    return parseInt(mes / 4) + 1;
}

alert("Cuatrimestre: " + cuatrimestre(mes));