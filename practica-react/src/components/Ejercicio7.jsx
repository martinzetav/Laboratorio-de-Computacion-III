import { useState } from "react"

export default function Ejercicio7(){

    const [personas] = useState(["Jose", "Pepe", "Marcos", "Lucas"]);

    return (
        <>
            <p>7- A partir de un arreglo con nombres de personas realizar un programa en React que genere el listado de nombres empleando "ul" y "li".</p> <hr />

            <ol>{personas.map((persona, index) => <li key={index}>{persona}</li>)}</ol>
        </>
    )
}