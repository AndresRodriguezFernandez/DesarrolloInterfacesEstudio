/*
 * Agenda de contactos
 * Escribe aquí tu código.
 */
var contactos = []; 

var inputNombre, inputTelefono, inputEmail, selectGrupo, checkFavorito;
var inputBuscar, btnAnadir, btnVaciar;
var capaInformacion, capaListado, parrafoContador;

window.addEventListener("load", inicializar);

function inicializar() {
    inputNombre = document.getElementById("nombre");
    inputTelefono = document.getElementById("telefono");
    inputEmail = document.getElementById("email");
    selectGrupo = document.getElementById("grupo");
    checkFavorito = document.getElementById("favorito");
    inputBuscar = document.getElementById("buscar");
    btnAnadir = document.getElementById("anadir");
    btnVaciar = document.getElementById("vaciar");

    capaInformacion = document.getElementById("informacion");
    capaListado = document.getElementById("listado");
    parrafoContador = document.getElementById("contador");

    btnAnadir.addEventListener("click", anadirContacto);
    btnVaciar.addEventListener("click", vaciarAgenda);
    inputBuscar.addEventListener("input", buscar);

    actualizarVista();
}

//para hacer esta parte me he tenido que apoyar de la ia 
var patronTelefono = /^[0-9]{9}$/;
var patronEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function anadirContacto() {
    var nombre = inputNombre.value.trim();
    var telefono = inputTelefono.value.trim();
    var email = inputEmail.value.trim();
    var grupo = selectGrupo.value;
    var favorito = checkFavorito.checked;

    if (nombre === "") {
        mostrarMensaje("El nombre es obligatorio.");
        inputNombre.focus();
        return;
    }
    
    if (telefono === "") {
        mostrarMensaje("El teléfono es obligatorio.");
        inputTelefono.focus();
        return;
    }
    
    if (!patronTelefono.test(telefono)) {
        mostrarMensaje("El teléfono debe tener exactamente 9 cifras.");
        inputTelefono.focus();
        return;
    }
    
    if (email !== "" && !patronEmail.test(email)) {
        mostrarMensaje("El email no tiene un formato correcto.");
        inputEmail.focus();
        return;
    }

    
    var nuevo = new contacto(nombre, telefono, email, grupo, favorito);
    contactos.push(nuevo);

    mostrarMensaje("Contacto añadido correctamente.");
    borrarFormulario();
    actualizarVista();
}

function borrarFormulario() {
    inputNombre.value = "";
    inputTelefono.value = "";
    inputEmail.value = "";
    selectGrupo.value = "otros"; 
    checkFavorito.checked = false;
}


function mostrarMensaje(texto) {
    capaInformacion.innerText = texto;
    capaInformacion.style.display = "block";
}

//para esta funcion y la siguiente me he apoyado de la ia
function mostrarLista(listaAMostrar) {
    capaListado.innerHTML = "";

    if (listaAMostrar.length === 0) {
        var mensajeVacio = document.createElement("p");
        mensajeVacio.innerText = (contactos.length === 0)
            ? "La agenda está vacía"
            : "Ningún contacto coincide con la búsqueda";
        capaListado.appendChild(mensajeVacio);
        return;
    }

    var ul = document.createElement("ul");

    for (var i = 0; i < listaAMostrar.length; i++) {
        var contacto = listaAMostrar[i];

        var li = document.createElement("li");
        // toString() ya está definido en contacto.js
        var texto = document.createTextNode(contacto.toString());
        li.appendChild(texto);

        if (contacto.Favorito) {
            li.classList.add("favorito");
        }

        ul.appendChild(li);
    }

    capaListado.appendChild(ul);
}


function actualizarContador() {
    var totalContactos = contactos.length;
    var totalFavoritos = contactos.filter(function (c) {
        return c.Favorito;
    }).length;

    var textoContactos = totalContactos + (totalContactos === 1 ? " contacto" : " contactos");
    var textoFavoritos = totalFavoritos + (totalFavoritos === 1 ? " favorito" : " favoritos");

    parrafoContador.innerText = textoContactos + " · " + textoFavoritos;
}

function buscar() {
    var texto = inputBuscar.value.trim().toLowerCase();

    if (texto === "") {
        mostrarLista(contactos);
        return;
    }

    var filtrados = contactos.filter(function (c) {
        return c.Nombre.toLowerCase().includes(texto);
    });

    mostrarLista(filtrados);
}


function vaciarAgenda() {
    if (contactos.length === 0) {
        mostrarMensaje("La agenda ya está vacía.");
        return;
    }

    var seguro = confirm("¿Seguro que quieres vaciar la agenda?");
    if (!seguro) {
        return;
    }

    contactos = [];
    inputBuscar.value = "";
    mostrarMensaje("La agenda ha sido vaciada.");
    actualizarVista();
}

function actualizarVista() {
    if (inputBuscar.value.trim() !== "") {
        buscar();
    } else {
        mostrarLista(contactos);
    }
    actualizarContador();
}
