function $(e){
    return document.getElementById(e);
}

const listado = $("listado");
const mostrar = $("mostrar");
const listadoTareas = $("listadoTareas");

mostrar.addEventListener("click", async () => {
    const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const personas = await resUsers.json();

    personas.forEach(persona => {
        const item = document.createElement("li");
        item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`;
        listado.appendChild(item);

        const btnVerTareas = document.createElement("button");
        btnVerTareas.textContent = "Ver Tareas";
        btnVerTareas.addEventListener("click", () => {
            verTareas(persona.id);
        });
        item.appendChild(btnVerTareas);
    });
});

async function verTareas(userId) {
    const resTodos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const tareas = await resTodos.json();

    listadoTareas.innerHTML = '';

    tareas.forEach(tarea => {
        const item2 = document.createElement("li");
        item2.textContent = tarea.title;
        if (tarea.completed) {
            item2.style.color = 'green';
        } else {
            item2.style.color = 'red'; 
        }
        listadoTareas.appendChild(item2);
    });
}
