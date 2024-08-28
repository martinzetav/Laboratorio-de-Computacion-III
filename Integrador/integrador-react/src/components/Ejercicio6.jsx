import { useState } from "react"

export default function Ejercicio6(){

    const [ciudades, setCiudades] = useState([]);
    const [nombre, setNombre] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [mayorPoblacion, setMayorPoblacion] = useState("");
    const [ciudadProxima, setCiudadProxima] = useState("");

    const agregarCiudad = (e) =>{
        e.preventDefault();
        const nuevaCiudad = {nombre, poblacion: parseInt(poblacion)};
        const listaCiudades = [...ciudades, nuevaCiudad];
        setCiudades(listaCiudades);
        setNombre("");
        setPoblacion("");

        const masPoblada = listaCiudades.reduce((max, ciudad) => ciudad.poblacion > max.poblacion ? ciudad : max, listaCiudades[0]);
        
        setMayorPoblacion(`La ciudad con mayor poblacion es ${masPoblada.nombre} con una población de ${masPoblada.poblacion}`);

        const poblacionLaRioja = 362605;
        const ciudadMasProxima = listaCiudades.reduce((cercana, ciudad) =>
            Math.abs(ciudad.poblacion - poblacionLaRioja) < Math.abs(cercana.poblacion - poblacionLaRioja)
            ? ciudad
            : cercana
        , listaCiudades[0]);
        setCiudadProxima(`La ciudad de ${ciudadMasProxima.nombre} con una poblacion de ${ciudadMasProxima.poblacion} es la mas proxima a la cantidad de pobladores de La Rioja (362605)`);
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="ciudad">Ciudad:</label>
                    <input type="text" id="ciudad" value={nombre} onChange={e => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="poblacion">Poblacion:</label>
                    <input type="number" id="poblacion" value={poblacion} onChange={e=>setPoblacion(parseInt(e.target.value))} />
                </div>
                <button type="submit" onClick={agregarCiudad}>Agregar</button>
            </form>
            <div>
                <span>{mayorPoblacion}</span>
            </div>
            <div>
                <span>{ciudadProxima}</span>
            </div>
        </>
    )
}