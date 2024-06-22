import { useState } from "react"

export default function Ejercicio4(){

    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);

    return (
        <>
            <p> 4- Escriba un programa en React con Vite que a partir de dos entradas numéricas base y altura. Calcule y muestre como una alerta el perímetro o superficie de un rectángulo. Emplear un botón para el perímetro y otro para la superficie.</p> <hr />

            <label htmlFor="base">Base</label>
            <input type="number" id="base" value={base} onChange={(e)=>setBase(e.target.value)}/> <br /> <br />
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" value={altura} onChange={(e)=>setAltura(e.target.value)} /><br /> <br />
            <Perimetro base={base} altura={altura}/>
            <Superficie base={base} altura={altura}/>
            
        </>
    )
}

function Perimetro({base, altura}){

    const resulPerimetro = () => alert("El perimetro es " + ((base*2) + (altura*2)));
    return (
        <>
            <button onClick={resulPerimetro}>Perimetro</button>
        </>
    )
}

function Superficie({base, altura}){

    const resulSuperficie = () => alert("La superficie es " + (base * altura));
    return (
        <>
            <button onClick={resulSuperficie}>Superficie</button>
        </>
    )
}