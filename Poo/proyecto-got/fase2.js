import { Casa } from './clases/Casa.js';
import { Arma } from './clases/Arma.js';
import { Guerrero } from './clases/Guerrero.js';
import { Consejero } from './clases/Consejero.js';
import { Rey } from './clases/Rey.js';

let casaStark = new Casa("Stark", "Se acerca el invierno");
let garra = new Arma("Garra", 25, "espada");
let jonSnow = new Guerrero("Jon Snow", 17, garra);
casaStark.añadirMiembros(jonSnow);
jonSnow.presentarse();
jonSnow.luchar();
jonSnow.entrenar();

let casaLannister = new Casa("Lannister", "¡Oye mi rugido!");
let tyrionLannister = new Consejero("Tyrion Lannister", 30);
let robertBaratheon = new Rey("Robert Baratheon", 41);

casaLannister.añadirMiembros(tyrionLannister);
casaLannister.añadirMiembros(robertBaratheon);
tyrionLannister.presentarse();
tyrionLannister.luchar();
tyrionLannister.aconsejar(robertBaratheon);
robertBaratheon.presentarse();
robertBaratheon.gobernar();
robertBaratheon.luchar();