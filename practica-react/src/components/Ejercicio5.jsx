import { useState } from "react"

export default function Ejercicio5(){

    const [colorTexto, setColorTexto] = useState("black");
    const [colorFondo, setColorFondo] = useState("white");

    return (
        <>
            <p> 5- Empleando dos listas desplegables con "select", realizar un programa en React que modifique el color de texto y el color de fondo de un elemento "p".</p> <hr />

            <p style={{color: colorTexto, backgroundColor: colorFondo}}>Este es un texto</p>
            <label>Color Texto</label>
            <select value={colorTexto} onChange={(e) => setColorTexto(e.target.value)}>
                <option value="black">Negro</option>
                <option value="red">Rojo</option>
                <option value="green">Verde</option>
                <option value="blue">Azul</option>
            </select>
            <br />
            <label>Color Fondo</label>
            <select value={colorFondo} onChange={(e) => setColorFondo(e.target.value)}>
                <option value="white">Blanco</option>
                <option value="red">Rojo</option>
                <option value="green">Verde</option>
                <option value="blue">Azul</option>
            </select>
        </>
    )
}