function $(e){
    return document.getElementById(e);
}

const entrada = $("entrada");
const formulario = $("formulario");


formulario.onsubmit = (e) =>{
    if(entrada.value.trim() !== ""){
        const item = document.createElement("li");
        const itemName = entrada.value;
        entrada.value = "";
        item.innerText = itemName;
        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "X";
        item.appendChild(btnEliminar);
        listado.appendChild(item);

        btnEliminar.onclick = () =>{
            if(confirm(`¿Desea eliminar a ${itemName}`)){
                item.remove();
            }
        }
    } else alert("No se puede agregar un campo vacio.")
    e.preventDefault()
}