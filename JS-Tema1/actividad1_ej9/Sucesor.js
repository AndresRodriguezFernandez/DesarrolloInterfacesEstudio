import { Persona } from "./Persona.js";

class Sucesor extends Persona{
    constructor(nombre, apellidos, tieneMoto = false){
        super(nombre, apellidos);
        this.tieneMoto = tieneMoto;
    }

    desplazarse(puntoA, puntoB){
        if(this.tieneMoto){
            console.log("Esta persona se desplaza en moto de " + puntoA + " a " + puntoB);
        }else{
            console.log("Esta persona se desplaza a pie de " + puntoA + " a " + puntoB);
        }
    }
}

export {Sucesor};