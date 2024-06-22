function $(e){
    return document.getElementById(e);
}

const listado = $("listado");
const btnMostrar = $("btnMostrar");

btnMostrar.addEventListener("click", async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(res.ok){
        console.info("Llegaron los datos!");
        const personas = await res.json();
        
        personas.forEach(persona =>{
            const item = document.createElement("li");
            item.textContent = `${persona.id} - ${persona.name} - ${persona.email}`
            listado.appendChild(item);
        })
    } else{
        console.error("Error: no llegaron los datos.");
    }
})
