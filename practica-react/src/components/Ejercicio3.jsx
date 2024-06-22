import { useState } from "react"

export default function Ejercicio3(){

    const [num, setNum] = useState(0);

    return (
        <>
            <p> 3- Realizar un programa en React con Vite que a medida que el usuario cambia un numero ingresado en un "input", indique debajo lo siguiente:<br/>
            • Si el número ingresado es positivo, negativo o cero. <br />
            • Si el número ingresado es par o impar. <br />
            • Si el número es múltiplo de 7. <br />
            • Si el número es capicua.</p> <hr />

            <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))}/>
            <Signo numero={num}/>
            <Pariedad numero={num}/>
            <MultiploDe7 numero={num}/>
            <Capicua numero={num}/>
        </>
    )
}

function Signo({numero}){
    return (
        <>
            {numero > 0 && <p>es POSITIVO</p>}
            {numero < 0 && <p>es NEGATIVO</p>}
            {numero === 0 && <p>es CERO</p>}
        </>
    )
}

function Pariedad({numero}){
    return (
        <>
        {numero%2 === 0 && <p>es PAR</p>}
        {numero %2 !== 0 && <p>es IMPAR</p>}
        </>
    )
}

function MultiploDe7({numero}){
    return (
        <>
            {numero%7 === 0 && <p>ES multiplo de 7</p>}
            {numero %7 !== 0 && <p>NO ES multiplo de 7</p>}
        </>
    )
}

function Capicua({numero}){
    const numeroAComparar = parseInt(numero.toString().split("").reverse().join(""))
    return (
        <>
            {Math.abs(numero) === numeroAComparar && <p>ES capicua</p>}
            {Math.abs(numero) !== numeroAComparar && <p>NO ES capicua</p>}
        </>
    )
}