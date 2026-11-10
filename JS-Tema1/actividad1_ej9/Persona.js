class Persona{
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    comer(){
        console.log("Esta persona come");
    }
}

export {Persona};