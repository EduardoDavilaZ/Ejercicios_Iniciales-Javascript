import { Casa } from './clases/Casa.js';
import { Arma } from './clases/Arma.js';
import { Guerrero } from './clases/personajesEspeciales/Guerrero.js';
import { Rey } from './clases/personajesEspeciales/Rey.js';
import { Consejero } from './clases/personajesEspeciales/Consejero.js'
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
const jon = new Guerrero("Jon Snow", 25, garra);
const arya = new Guerrero("Arya Stark", 18, aguja);
const robb = new Guerrero("Robb Stark", 22, espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, hacha);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32, filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, hacha);

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.agregarMiembro(jon);
casaStark.agregarMiembro(arya);
casaStark.agregarMiembro(robb);
casaStark.agregarMiembro(brienne);

casaLannister.agregarMiembro(jaime);
casaLannister.agregarMiembro(cersei);
casaLannister.agregarMiembro(tyrion);
casaLannister.agregarMiembro(gregor);

casaStark.listarMiembros();
casaLannister.listarMiembros();

const batallaBastardos = new Batalla();
batallaBastardos.iniciarBatalla(casaStark,casaLannister);

batallaBastardos.mostrarGuerrerosMuertosEnBatalla();