const personas = [
    {
        nombre: "Mario",
        apellido: "Fuentes",
        edad: 32
    },
    {
        nombre: "Jose",
        apellido: "Villarroel",
        edad: 56
    },
    {
        nombre: "Milena",
        apellido: "Zuler",
        edad: 27
    }
]

function $(e){
    return document.getElementById(e);
}

const listado = $("listado");

personas.forEach(persona =>{
    const item = document.createElement("li");
    item.textContent = `${persona.apellido}, ${persona.nombre} - ${persona.edad}`
    listado.appendChild(item);
})