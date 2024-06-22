function $(e){
    return document.getElementById(e);
}

const parrafo = $("parrafo");

// parrafo.innerHTML = "<strong>hola<strong/>"
// parrafo.innerText = "<strong>hola<strong/>"
parrafo.textContent = "Hola desde Javascript";