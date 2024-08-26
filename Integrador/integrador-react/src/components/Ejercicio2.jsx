import { useState } from "react"

export default function Ejercicio2(){
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState({
        nombre:"",
        edad:""
    })
    const [hayMayor, setHayMayor] = useState("");
    const [promedio, setPromedio] = useState(0);

    const handleAdd = (e) =>{
        if(persona.nombre.trim() == "" || persona.edad.toString().trim() == ""){
            alert("Debe rellenar todos los campos");
        }else{
            const listaPersonas = [...personas, persona];
            setPersonas(listaPersonas);
    
            setPersona({
                nombre:"",
                edad:""
            });
    
            const mayor = listaPersonas.some(p => p.edad >= 18);
            setHayMayor(mayor ? "Existe una persona mayor de edad" : "");
            
            const totalEdades = listaPersonas.reduce((ac,p) => ac+p.edad,0);
            const promedioEdades = totalEdades / listaPersonas.length;
            setPromedio(promedioEdades);
        }
        e.preventDefault();
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={persona.nombre} onChange={e=>setPersona({...persona, nombre: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="edad">Edad:</label>
                    <input type="number" id="edad" value={persona.edad} onChange={e=>setPersona({...persona, edad: parseInt(e.target.value)})}/>
                </div>
                <button onClick={handleAdd}>Agregar</button>
            </form>

            <div>
                <span>{hayMayor}</span>
            </div>
            <div>
                <span>{promedio}</span>
            </div>
        </>
    )
}