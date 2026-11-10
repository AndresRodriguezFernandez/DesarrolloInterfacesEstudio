import { Persona } from "./Persona.js";

class Progenitor extends Persona{
    constructor(nombre, apellidos, tieneCoche = false){
        super(nombre, apellidos);
        this.tieneCoche=tieneCoche;
    }

    desplazarse(puntoA, puntoB){
        if(this.tieneCoche){
            console.log("Esta persona se desplaza en coche de " + puntoA + " a " + puntoB);
        }else{
            console.log("Esta persona se desplaza a pie de " + puntoA + " a " + puntoB);
        }
    }

    comer(){
        console.log("Esta persona come huevos");
    }
}    
export {Progenitor};