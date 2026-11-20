let tituloDom = document.getElementById("titulo");
let parrafoDom = document.getElementById("parrafo");

//cambias contenido y estilos
tituloDom.innerHTML = "<p>Texto</p>";
tituloDom.style.color = "red";
parrafoDom.style.backgroundColor = "green";

//eventos
//funncion
boton.addEventListener("click", function() {
    console.log("Click!");
});

//arrow function
boton.addEventListener("click", () =>{
    alert("Click!");
});

//crear y añadir elementos
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy nuevo";
document.body.appendChild(nuevoParrafo);

//nuevoParrafo.remove();
