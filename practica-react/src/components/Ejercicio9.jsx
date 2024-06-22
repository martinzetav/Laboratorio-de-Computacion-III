import { useState } from "react"

export default function Ejercicio9(){
    const [personas] = useState([{nombre: "Mario", apellido: "Fuentes", edad: 32}, {nombre: "Jose", apellido: "Villarroel", edad: 56}, {nombre: "Milena", apellido: "Zuler", edad: 27}, {nombre: "Victor", apellido: "Quiroga", edad: 19}]);

    return (
        <>
            <p>9- A partir de un arreglo con datos de una persona nombre, apellido, edad realice una pagina que 
            muestre el listado de personas con sus datos empleando "ul" y "li".</p> <hr />

            <ul>
                {personas.map(persona => <li>{persona.apellido}, {persona.nombre} - {persona.edad}</li>)}
            </ul>
        </>
    )
}