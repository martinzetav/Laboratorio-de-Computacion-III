import { useState } from "react"

export default function Ejercicio8(){
    const [personas, setPersonas] = useState(["Jose", "Pepe", "Marcos", "Lucas"]);
    const [nombre, setNombre] = useState("");

    const handleAdd = e =>{
        if(nombre.trim() !== ""){
            setPersonas([...personas, nombre]);
            setNombre("");
        } else alert("El campo esta vacio");
        e.preventDefault();
    }

    const handlePop = (persona, indice) =>{
        if(confirm(`¿Desea quitar a ${persona} de la lista?`)){
            setPersonas(personas.filter((p,i) => i !== indice));
        }
        console.log(persona);
    }

    return (
        <>
            <p> 8- Escribir un programa en React que agregue y quite nombres del listado generado en el programa anterior. Emplear un formulario para ingresar un nuevo nombre.</p> <hr />

            <form onSubmit={handleAdd}>
                <label htmlFor="nombre"></label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <button type="submit" disabled={nombre.trim()===""}>Agregar</button>
            </form>

            <ol>{personas.map((persona, indice) =>{
                return(
                <li key={indice}>{persona}
                <button onClick={()=>handlePop(persona, indice)}>X</button></li>
            )})}</ol>
        </>
    )
}

