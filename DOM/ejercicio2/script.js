function $(e){
    return document.getElementById(e);
}

const parrafo = $("parrafo");
const entrada = $("entrada");
const btnCambiar = $("btnCambiar");

const modificar = () =>{
    const input = entrada.value;
    if(input.trim() !== ""){
        parrafo.textContent = entrada.value;
        entrada.value = "";
    } else alert("DEBE INGRESAR ALGO DENTRO DEL INPUT")
}