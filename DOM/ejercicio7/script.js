function $(e){
    return document.getElementById(e);
}

const listado = $("listado");

const personas = ["Jose", "Pepe", "Marcos", "Lucas"];

personas.forEach(persona =>{
    let item = document.createElement("li");
    item.innerText = persona;
    listado.appendChild(item);
});