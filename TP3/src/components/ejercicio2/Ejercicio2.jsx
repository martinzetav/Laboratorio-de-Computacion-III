import { useState } from "react"

export default function Ejercicio2(){

    const [colorTxt, setColorTxt] = useState("black");
    const [fondoTxt, setFondoTxt] = useState("white")
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState("");

    const calcularIMC = () =>{
        const imc = peso / Math.pow(altura / 100, 2);
        if(imc < 18.5){
            setResultado(`Su IMC ${imc.toFixed(2)} indica un nivel BAJO`);
            setFondoTxt("yellow");
        }else if(imc >= 18.5 && imc <= 24.9){
            setResultado(`Su IMC ${imc.toFixed(2)} indica un nivel NORMAL`);
            setFondoTxt("green");
            setColorTxt("white");
        }else if(imc >= 25 && imc <= 29.9){
            setResultado(`Su IMC ${imc.toFixed(2)} indica un nivel de SOBREPESO`);
            setFondoTxt("orange");
        }else{
            setResultado(`Su IMC ${imc.toFixed(2)} indica un nivel de OBESIDAD`);
            setFondoTxt("red");
            setColorTxt("white");

        }
    }

    return (
        <>
            <p> 2- Escribir un programa de Vite con React que permita calcular el IMC de una persona. Luego de realizar el cálculo, mostrar un mensaje con las siguientes características: <br /> • Si IMC es menor a 18.5 mostrar un mensaje en tono amarillo indicando que se trata un nivel bajo. <br /> • Si IMC está entre 18.5 y 24.9 mostrar un mensaje en tono verde indicando que se trata de un nivel normal. <br /> • Si IMC está entre 25 – 29.9 mostrar un mensaje en tono naranja indicando que se trata de un nivel de sobrepeso. <br />• Si IMC es mayor o igual a 30 mostrar un mensaje en tono rojo indicando que se trata de un nivel de obesidad.</p> <hr />

            <div>
                <label htmlFor="altuta">Altura (en metros):</label>
                <input type="number" id="altura" value={altura} onChange={e => setAltura(parseFloat(e.target.value))}/>
            </div>
            <div>
                <label htmlFor="peso">Peso (en kilogramos):</label>
                <input type="number" id="peso" value={peso} onChange={e => setPeso(parseFloat(e.target.value))}/>
            </div>
            <button onClick={calcularIMC}>Calcular</button>
            <p style={{color: colorTxt, backgroundColor: fondoTxt}}>{resultado}</p>
        </>
    )
}