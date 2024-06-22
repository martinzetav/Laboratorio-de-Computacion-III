import { useState, useEffect } from "react"

export default function Ejercicio11(){
    const [personas, setPersonas] = useState([]);

    useEffect(()=>{
        const handleShowPeople = async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(res.ok){
                console.log("Llegaron los datos!");
                const nuevasPersonas = await res.json();
                setPersonas(nuevasPersonas);
            } else{
                console.error("Error: no llegaron los datos.");
            }
        };
        handleShowPeople();
    }, []);

    return (
        <>
            <p>11- Empleando la API de <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a> realice una pagina que muestre id y nombre y email de los usuarios que se encuentran en <a href="https://jsonplaceholder.typicode.com/users" target="_blank">/users</a>.</p> <hr></hr>

            <h1>Listado de personas</h1>
            <ul>
                {personas.map((persona, indice)=> <li key={indice}>{persona.id} - {persona.name} - {persona.email}</li>)}
            </ul>
        </>
    )
}