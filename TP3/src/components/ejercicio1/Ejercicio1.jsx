import { useState } from "react"
import "./Ejercicio1.css"

export default function Ejercicio1(){

    const [btnLeft, setBtnLeft] = useState(false);
    const [btnCenter, setBtnCenter] = useState(true);
    const [btnRight, setBtnRight] = useState(true)

    const desactivarLeft = () =>{
        setBtnLeft(true);
        setBtnCenter(false);
    }

    const desactivarCenter = () =>{
        setBtnCenter(true);
        setBtnRight(false);
    }

    const desactivarRight = () =>{
        setBtnRight(true);
        setBtnLeft(false);
    }

    return (
        <>
            <p> 1- Realice en Vite con React una pagina con tres botones llamados "izquierdo", "centro" y "derecho". Inicialmente solamente el botón "izquierdo" esta habilitado. Al presionar el botón "izquierdo", se deshabilita a si mismo y luego habilita al botón "centro". Luego al presionar el botón "centro", se deshabilita a si mismo y luego habilita al botón "derecho". Por último, al presionar el botón "derecho", se deshabilita a si mismo y luego habilita al botón "izquierdo". Todo esto permite que solo un botón este habilitado al mismo tiempo.</p> <hr />
            <div className="container1">
                <button className="btn" disabled={btnLeft} onClick={desactivarLeft}>Izquierda</button>   
                <button className="btn" disabled={btnCenter} onClick={desactivarCenter}>Centro</button>
                <button className="btn" disabled={btnRight} onClick={desactivarRight}>Derecho</button>
            </div>
        </>
    )
}