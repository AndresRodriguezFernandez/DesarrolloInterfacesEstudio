let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafoBoton");

boton.addEventListener("click", function(){
    parrafo.textContent = "Has hecho click";
    parrafo.classList.add("activo");
});


