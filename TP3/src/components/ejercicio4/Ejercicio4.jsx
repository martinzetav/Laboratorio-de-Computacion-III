import { useState } from "react"

export default function Ejercicio4(){

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);
    const [altura, setAltura] = useState(0);
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [colorFondo, setColorFondo] = useState("white");

    const handleValidar = (e) =>{
        if(nombre.trim() === "" || apellido.trim() ===""){
            setMensaje("Los campos nombre y apellido no pueden estar vacios.");
            setColorFondo("red");
        }else if(nombre.length > 50 || apellido.length > 50){
            setMensaje("Los campos nombre y apellido deben tener un maximo de 50 caracteres.");
            setColorFondo("red");
        }else if(edad < 0 || edad < 18){
            setMensaje("La edad no puede ser negativa ni menor a 18 años.");
            setColorFondo("red");
        }else if(altura < 0 || altura > 230){
            setMensaje("La altura no puede ser negativa ni mayor a 230 cm.");
            setColorFondo("red");
        }else if(correo.trim() === "" || !correo.includes("@")){
            setMensaje("El campo de correo electronico no puede estar vacio y debe contener @.");
            setColorFondo("red");
        } else{
            setMensaje("Los datos fueron enviados!");
            setColorFondo("green");
        }
        e.preventDefault();
    }

    return (
        <>
             4- Realice un programa con Vite con React que presente un formulario que permita ingresar el nombre, apellido, edad en años, altura en centímetros y correo electrónico de una persona. Al hacer click sobre un botón llamado "enviar" este debe realizar las siguiente validaciones: <br />• El nombre y apellido no pueden estar vacíos y deben tener un máximo de 50 caracteres. <br />• La edad no debe ser negativa pero también validar que no sea menor de edad. <br />• La altura no puede ser negativa y no puede ser mayor a 230 (cm). <br />• El correo electrónico no puede estar vacío y debe incluir el "@". <br />Mostrar en un elemento "p" un mensaje con el resultado de las validaciones. Si todas las validaciones son correctas mostrar el mensaje en verde, en caso contrario en rojo. <hr />

             <form onSubmit={handleValidar}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" maxLength={50} value={nombre} onChange={e => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" maxLength={50} value={apellido} onChange={e => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="edad">Edad:</label>
                    <input type="number" id="edad" value={edad} onChange={e => setEdad(parseInt(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="altura">Altura (en centimetros):</label>
                    <input type="number" id="altura" value={altura} onChange={e => setAltura(parseInt(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="correo">Correo Electronico:</label>
                    <input type="email" id="correo" value={correo} onChange={e => setCorreo(e.target.value)}/>
                </div>
                <button type="submit">Enviar</button>
             </form>

             <p style={{color: "white", backgroundColor: colorFondo}}>{mensaje}</p>
        </>
    )
}