import { useState } from "react"

export default function Ejercicio13(){

    const [contador, setContador] = useState(5);

    return (
        <>
            <h1>{contador}</h1>
            <button disabled={contador >= 10} onClick={()=> setContador(contador + 1)}>Incrementar</button>
            <button disabled={contador <= 0} onClick={()=> setContador(contador - 1)}>Decrementar</button>
            <button onClick={() => setContador(5)}>Reiniciar</button>
        </>
    )
}