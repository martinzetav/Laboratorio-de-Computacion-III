import { useState, useEffect } from "react"

export default function Ejercicio5(){

    const [personas, setPersonas] = useState([]);
    const [tareas, setTareas] = useState([]);

    useEffect(()=>{
        const showPeople = async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(res.ok){
                console.log("Llegaron los datos!");
                const personasJson = await res.json();
                setPersonas(personasJson);
            }else{
                console.error("Los datos no llegaron!");
            }
        }
        showPeople();
    }, [])

    const showTodos = async (id) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        if(res.ok){
            console.log("Llegaron las tareas de los usuarios!");
            const tareasJson = await res.json();
            setTareas(tareasJson)
        }else{
            console.error("Las tareas de los usuarios no llegaron!");
        }
    }

    return (
        <>
            <p> 5- Empleando la API de <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a> realice una pagina en Vite con React que muestre id, nombre, nombre de usuario, email y sitio web de los usuarios que se encuentran en <a href="https://jsonplaceholder.typicode.com/users">/users</a>. A cada usuario agregar un botón "Ver tareas" para que muestre abajo del listado de usuario las tareas relacionadas al mismo. Aplicar estilos si la tarea fue realizada o no.</p> <hr />

            <ul>
                {personas.map((persona, i) =>{
                    return (
                        <li key={i}>{persona.id} - {persona.name} - {persona.username} - {persona.email} - {persona.website}
                        <button onClick={()=>showTodos(persona.id)}>Ver Tareas</button>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {tareas.map((tarea, i)=>{
                    return (
                        <li key={i} style={{color: tarea.completed?"green":"red"}}>{tarea.title}</li>
                    )
                })}
            </ul>
        </>
    )
}