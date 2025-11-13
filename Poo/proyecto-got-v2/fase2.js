import { Casa } from './clases/Casa.js';
import { Arma } from './clases/Arma.js';
import { Guerrero } from './clases/personajesEspeciales/Guerrero.js';
import { Consejero } from './clases/personajesEspeciales/Consejero.js';
import { Rey } from './clases/personajesEspeciales/Rey.js';


let casaStark = new Casa("Stark", "Se acerca el invierno");
let garra = new Arma("Garra", 25, "espada");
let jonSnow = new Guerrero("Jon Snow", 17, true, garra);
casaStark.agregarMiembro(jonSnow);
jonSnow.presentarse();
jonSnow.luchar();
jonSnow.entrenar();

let casaLannister = new Casa("Lannister", "¡Oye mi rugido!");
let tyrionLannister = new Consejero("Tyrion Lannister", 30);
let robertBaratheon = new Rey("Robert Baratheon", 41);

casaLannister.agregarMiembro(tyrionLannister);
casaLannister.agregarMiembro(robertBaratheon);
tyrionLannister.presentarse();
tyrionLannister.luchar();
tyrionLannister.aconsejar(robertBaratheon);
robertBaratheon.presentarse();
robertBaratheon.gobernar();
robertBaratheon.luchar();