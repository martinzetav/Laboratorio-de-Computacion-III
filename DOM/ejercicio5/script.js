function $(e){
    return document.getElementById(e);
}

const texto = $("texto");
const colorTexto = $("colorTexto");
const colorFondo = $("colorFondo");

const cambiarColor = ()=>{
    texto.style.color = colorTexto.value;
}

colorFondo.onchange = ()=>{
    texto.style.backgroundColor = colorFondo.value;
}