class Persona{
    constructor(nombre = "Sin nombre", apellidos = "Sin apellidos"){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }

    getApellidos(){
        return this.apellidos;
    }

    setApellidos(apellidos){
        this.apellidos=apellidos;
    }

    comer(platos = ["bocata de chorizo"]){
        console.log(`${this.nombre} ${this.apellidos} está comiendo ${platos.toString()} `);
    }
}

var p = new Persona();
var p2 = new Persona("Ana", "Gomez");
p.comer();
p2.comer(["ensalada", "sopa"]);