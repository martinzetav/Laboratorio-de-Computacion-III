import { useState, useEffect } from "react"

export default function Ejercicio10(){

    const [personas, setPersonas] = useState([{nombre: "Mario", apellido: "Fuentes", edad: 32}, {nombre: "Jose", apellido: "Villarroel", edad: 56}, {nombre: "Milena", apellido: "Zuler", edad: 27}, {nombre: "Victor", apellido: "Quiroga", edad: 19}]);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
    
    const handleAdd = e =>{
        if(nombre.trim() !== "" && apellido.trim() !== "" && edad.toString().trim() !==""){
            const persona = {
                nombre,
                apellido,
                edad
            }
            setPersonas([...personas, persona])
        } else{
            alert("Ningun campo puede estar vacio!")
        }
        
        e.preventDefault();
    }

    const handlePop = indice =>{
        if(confirm(`¿Desea quitar a ${personas[indice].nombre} ${personas[indice].apellido} de ${personas[indice].edad} años?`)){
            setPersonas(personas.filter((p) => personas.indexOf(p) !== indice))
        }
    }
    
    useEffect(() => {
        setBotonDeshabilitado(nombre.trim() === "" || apellido.trim() === "" || edad.toString().trim() ==="");
    }, [nombre, apellido, edad]);
    
    return (
        <>
            <p> 10- A partir del ejercicio anterior agregue funcionalidades de crear y eliminar. Al eliminar preguntar primero al usuario si desea hacerlo.</p> <hr />

            <form onSubmit={handleAdd}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apelldo" value={apellido} onChange={e => setApellido(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="edad">Edad:</label>
                    <input type="number" id="edad" value={edad} onChange={e => setEdad(e.target.value)}/>
                </div>
                <button type="submit" disabled={botonDeshabilitado}>Agregar</button>
            </form>

            <ul>
                {personas.map((persona, indice) => <li key={indice}>{persona.apellido}, {persona.nombre} - {persona.edad}
                <button onClick={()=> handlePop(indice)}>X</button>
                </li>)}
            </ul>
        </>
    )
}