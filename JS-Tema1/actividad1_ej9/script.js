import { Progenitor } from "./Progenitor.js";
import { Sucesor } from "./Sucesor.js";

var progenitor = new Progenitor("Juan", "Pérez");
var sucesor = new Sucesor("María", "García", true);

progenitor.desplazarse("Madrid", "Barcelona");
progenitor.comer();
sucesor.desplazarse("Sevilla", "Valencia");
sucesor.comer();