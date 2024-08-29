import { useState } from "react"

export default function Ejercicio8(){

    const [bytes, setBytes] = useState(0);
    const [mebibytes, setMebibytes] = useState(0);
    const [gibibytes, setGibibytes] = useState(0);

    const conversionDeBytes = (e) =>{
        const B = parseFloat(e.target.value);
        setBytes(B);

        const nuevosMebibytes = B / (1024 * 1024);
        setMebibytes(nuevosMebibytes);

        const nuevosGibibytes = B / (1024 * 1024 * 1024);
        setGibibytes(nuevosGibibytes);
    }

    const conversionDeMebiBytes = (e) =>{
        const MiB = parseFloat(e.target.value);
        setMebibytes(MiB);

        const nuevosGibiBytes = MiB / 1024;
        setGibibytes(nuevosGibiBytes);

        const nuevosBytes = MiB * (1024 * 1024);
        setBytes(nuevosBytes);
    }

    const conversionDeGibibytes = (e) =>{
        const GiB = parseFloat(e.target.value);
        setGibibytes(GiB);

        const nuevosBytes = GiB * (1024 * 1024 * 1024);
        setBytes(nuevosBytes);

        const nuevosMebiBytes = GiB * 1024;
        setMebibytes(nuevosMebiBytes);
    }
    return (
        <>
            <div>
                <label htmlFor="bytes">Bytes:</label>
                <input type="number" id="bytes" value={bytes} onChange={conversionDeBytes}/>
            </div>
            <div>
                <label htmlFor="mebibytes">Mebibytes:</label>
                <input type="number" id="mebibytes" value={mebibytes} onChange={conversionDeMebiBytes}/>
            </div>
            <div>
                <label htmlFor="gibibytes">Gibibytes:</label>
                <input type="number" id="gibibytes" value={gibibytes} onChange={conversionDeGibibytes}/>
            </div>
        </>
    )
}