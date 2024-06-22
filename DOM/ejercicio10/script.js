function $(e){
    return document.getElementById(e);
}

const formulario = $("formulario");
const mensaje = $("mensaje");

formulario.onsubmit = (e) =>{
    if(formulario["nombre"].value.trim() === ""){
        mensaje.innerHTML = "El campo <b>nombre</b> no puede estar vacio.";
    }else if(formulario["apellido"].value.trim() === ""){
        mensaje.innerHTML = "El campo <b>apellido</b> no puede estar vacio.";
    }else if(formulario["edad"].value.trim() ===""){
        mensaje.innerHTML = "El campo <b>edad</b> no puede estar vacio.";
    } else if(parseInt(formulario["edad"].value) < 0){
        mensaje.innerHTML = "El campo <b>edad</b> no puede ser negativo.";
    }else if(parseInt(formulario["edad"].value) < 18){
        mensaje.innerHTML = "El campo <b>edad</b> no puede ser menor a 18.";
    }else{
        mensaje.innerHTML = "Todos los datos son correctos";

    }
    e.preventDefault()
}