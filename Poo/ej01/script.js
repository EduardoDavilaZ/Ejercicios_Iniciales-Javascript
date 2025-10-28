import { Personaje } from "./Personaje.js";

let p = new Personaje("Fer", 4);
console.log(p.status);

p.status = 10;
console.log(p.status);