import { useState } from "react"

export default function Ejercicio1(){

    const [num, setNum] = useState(0)

    const decremento = () => setNum(num - 1);

    return (
        <>
            <p> 1- Empleando React con Vite, realice un programa que permita incrementar o decrementar un 
            número en pantalla cuando el usuario haga click en los botones incrementar y decrementar.</p>
            <hr />
            <input type="text" value={num}/>
            <button onClick={() => setNum(num + 1)}>Incrementar</button>
            <button onClick={decremento}>Decrementar</button>
        </>
    )
}
