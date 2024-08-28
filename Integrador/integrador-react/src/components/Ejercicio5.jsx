import { useState } from "react"

export default function Ejercicio5(){

    const [metros, setMetros] = useState(0);
    const [pulgadas, setPulgadas] = useState(0);
    const [kilometros, setKilometros] = useState(0);

    const conversionDeMetros = (e) =>{
        const m = parseFloat(e.target.value);
        setMetros(m);

        const nuevasPulgadas = m * 39.37;
        setPulgadas(nuevasPulgadas);

        const nuevosKilometros = m / 1000;
        setKilometros(nuevosKilometros);
    }

    const conversionDePulgadas = (e) =>{
        const p = parseFloat(e.target.value);
        setPulgadas(p);

        const nuevosMetros = p / 39.37;
        setMetros(nuevosMetros);

        const nuevosKilometros = p / 39370;
        setKilometros(nuevosKilometros);
    }

    const conversionDeKilometros = (e) =>{
        const km = parseFloat(e.target.value);
        setKilometros(km);

        const nuevasPulgadas = km * 39370;
        setPulgadas(nuevasPulgadas);

        const nuevosMetros = km * 1000;
        setMetros(nuevosMetros);
    }

    return (
        <>
            <div>
                <label htmlFor="metros">Metros:</label>
                <input type="number" id="metros" value={metros} onChange={conversionDeMetros}/>
            </div>
            <div>
                <label htmlFor="pulgadas">Pulgadas:</label>
                <input type="number" id="pulgadas" value={pulgadas} onChange={conversionDePulgadas}/>
            </div>
            <div>
                <label htmlFor="kilometros">Kilometros:</label>
                <input type="number" id="kilometros" value={kilometros} onChange={conversionDeKilometros}/>
            </div>
        </>
    )
}