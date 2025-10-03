/*Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos operar
suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a
entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1)*/

let nota1 = parseInt(prompt("Primera nota: "));
let nota2 = parseInt(prompt("Segunda nota: "));
let nota3 = parseInt(prompt("Tercera nota: "));

let promedio = (nota1 + nota2 + nota3) / 3;

alert("Promedio: " + promedio);

promedio >= 7 ? alert("Promocionado") : alert("Repite");