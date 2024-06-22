function $(e){
    return document.getElementById(e);
}

const parrafo = $("parrafo");
const entrada = $("entrada");

const modificar = () =>{
    parrafo.textContent = entrada.value;
}