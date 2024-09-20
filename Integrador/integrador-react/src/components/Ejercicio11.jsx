import { useState } from "react"

export default function Ejercicio11(){

    const [lado1, setLado1] = useState(0);
    const [lado2, setLado2] = useState(0);
    const [lado3, setLado3] = useState(0);
    const [perimetro, setPerimetro] = useState("");
    const [tipo, setTipo] = useState("");


    const verificarTriangulo = (e) =>{
        e.preventDefault();
        if(lado1 > 0 && lado2 > 0 && lado3 > 0){
            const perimetroFinal = lado1 + lado2 + lado3;
            setPerimetro(perimetroFinal);
            if(lado1 == lado2 && lado1 == lado3){
                setTipo("EQUILATERO");
            }else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
                setTipo("ESCALENO")
            }else{
                setTipo("ISOSCELES");
            }
        }
    }

    return (
        <>
            <form onSubmit={verificarTriangulo}>
                <div>
                    <label htmlFor="lado1">Lado 1:</label>
                    <input type="number" id="lado1" value={lado1} onChange={e=>setLado1(parseFloat(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="lado2">Lado 2:</label>
                    <input type="number" id="lado2" value={lado2} onChange={e=>setLado2(parseFloat(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="lado3">Lado 3:</label>
                    <input type="number" id="lado3" value={lado3} onChange={e=>setLado3(parseFloat(e.target.value))}/>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <p>El perimetro del triangulo es de {perimetro}</p>
            <p>El triangulo es {tipo}</p>
        </>
    )
}