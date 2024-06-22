import { useState } from "react"

export default function Ejercicio2(){

    const [txtValue, setTxtValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    
    // const cambioValorInput = (e) => setInputValue(e.target.value);
    // const btnClick = () => setTxtValue(inputValue);

    return (
        <>
            <p> 2- Realizar un programa en React con Vite que modifique el texto de un elemento "p" con el valor de una entrada "input" al presionar un botón "button".</p>
            <hr />
            <p>{txtValue}</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type="submit" onClick={()=>setTxtValue(inputValue)}>Cambiar Texto</button>
        </>
    )
}