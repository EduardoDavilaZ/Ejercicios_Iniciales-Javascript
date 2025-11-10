import { Casa } from './clases/Casa.js';
import { Arma } from './clases/Arma.js';
import { Guerrero } from './clases/personajesEspeciales/Guerrero.js';
import { Batalla } from './clases/Batalla.js';

const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);

// === GUERREROS DE LA CASA STARK ===
const jon = new Guerrero("Jon Snow", 25, true, garra);
const arya = new Guerrero("Arya Stark", 18, true, aguja);
const robb = new Guerrero("Robb Stark", 22, true, espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, true, hacha);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32, true, filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, true, lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, true, hacha);

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.añadirMiembros(jon);
casaStark.añadirMiembros(arya);
casaStark.añadirMiembros(robb);
casaStark.añadirMiembros(brienne);

casaLannister.añadirMiembros(jaime);
casaLannister.añadirMiembros(cersei);
casaLannister.añadirMiembros(tyrion);
casaLannister.añadirMiembros(gregor);

casaStark.listarMiembros();
casaLannister.listarMiembros();

const batallaBastardos = new Batalla(casaStark,casaLannister);
batallaBastardos.iniciarBatalla();

batallaBastardos.mostrarGuerrerosMuertosEnBatalla();