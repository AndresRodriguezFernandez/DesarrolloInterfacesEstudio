function crearPersona(nombre, apellidos, edad = 0, ...contactos){
    console.log(`Nombre : ${nombre} ${apellidos}, Edad: ${edad}`);

    //recorremos el array de contactos y mostramos cada uno con funcion anonima
    if(contactos.length > 0){
        console.log("Con funcioñon anonima");
        contactos.forEach(function(contacto){
            console.log("Contacto: "+contacto);
        })
        console.log("Con funcion flecha");
        
    contactos.forEach(contacto => console.log("Contacto: "+contacto));

    }else{
        console.log("No hay contactos para mostrar");
    }

}

crearPersona("Juan", "Perez", 30);
crearPersona("Ana", "Gomez", 25, 123456789, "ana@gmail.com");