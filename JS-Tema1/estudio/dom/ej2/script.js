let lista = document.querySelectorAll("li");

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento nuevo";
document.querySelector("ul").appendChild(nuevoElemento);

console.log("Lista de antes:");
for(let i = 0; i < lista.length; i++){
    console.log(lista[i].textContent);
}
let lista2 = document.querySelectorAll("li");

console.log("Lista de después:");
for(let i = 0; i < lista2.length; i++){
    console.log(lista2[i].textContent);
}