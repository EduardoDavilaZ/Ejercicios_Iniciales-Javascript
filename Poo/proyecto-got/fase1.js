
import { Casa } from './clases/Casa.js';
import { Personaje } from './clases/Personaje.js';
import { Reino } from './clases/Reino.js';
import { Arma } from './clases/Arma.js';

let casaStark = new Casa("Stark", "Se acerca el invierno");
let casaLannister = new Casa("Lannister", "¡Oye mi rugido!");

let reyDePoniente = new Personaje("Stannis Baratheon", 36);
let reinoPoniente = new Reino("Poniente", reyDePoniente);

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLannister);

/* Crear a personajes y equiparlos */

let garra = new Arma("Garra", 25, "espada");
let aguja = new Arma("Aguja", 15, "espada");

let aryaStark = new Personaje("Arya Stark", 28);
let jonSnow = new Personaje("Jon Snow", 17);
let jaimeLannister = new Personaje("Jaime Lannister", 31)

jonSnow.arma = garra;
aryaStark.arma = aguja;

/* Añadir personajes a casas */

casaStark.añadirMiembros(jonSnow);
casaStark.añadirMiembros(aryaStark);
casaLannister.añadirMiembros(jaimeLannister);

reinoPoniente.rey = jaimeLannister;

reinoPoniente.listarCasas();
reinoPoniente.obtenerReyActual();

casaStark.listarMiembros();

console.log("Presentaciones: ");
console.log(jonSnow.presentarse());
console.log(aryaStark.presentarse());
console.log(jaimeLannister.presentarse());

console.log("Armas: ");
console.log(garra.descripcion());
console.log(aguja.descripcion());