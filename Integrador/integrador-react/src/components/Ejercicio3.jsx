import { useState } from "react"

export default function Ejercicio3(){

    const [contra1, setContra1] = useState("");
    const [contra2, setContra2] = useState("");
    const [validar, setValidar] = useState({
        longitud: false,
        numero: false,
        caracter: false,
        espacios: false,
        coincidir: false
    })

    const validarContra1 = (e) =>{
        const contra = e.target.value;
        setContra1(contra);

        let hayNumero = false;
        for(let i=0; i<contra.length; i++){
            if("0123456789".includes(contra[i])){
                hayNumero = true;
            }
        }


        let hayCaracter = false;
        for(let i=0; i<contra.length; i++){
            if("@!$%&#".includes(contra[i])){
                hayCaracter = true;
            }
        }
        setValidar({
            longitud: contra.length >= 8,
            numero: hayNumero,
            caracter: hayCaracter,
            espacios: !contra.includes(" ") && contra.length >= 0,
            coincidir: contra == contra2
        })

    }

    const validarContra2 = (e) =>{
        const contra = e.target.value;
        setContra2(contra);
        setValidar({
            ...validar,
            coincidir: contra == contra1
        })
    }

    const habilitar = () =>{
        for(const key in validar){
            if(!validar[key]){
                return true;
            }
        }
        return false;
    }

    const enviar = () =>{
        alert("¡Contraseña Valida!");
    }

    return(
        <>
            <form>
                <div>
                    <label htmlFor="contra">Contraseña:</label>
                    <input type="text" id="contra" value={contra1} onChange={validarContra1}/>
                </div>
                <div>
                    <label htmlFor="confirmContra">Confirmar Contraseña:</label>
                    <input type="text" id="confirmContra" value={contra2} onChange={validarContra2}/>
                </div>
                <button type="submit" disabled={habilitar()} onClick={enviar}>Enviar</button>
            </form>
            <p style={{color: validar.longitud ? "green" : "red"}}>La contraseña debe tener al menos 8 caracteres.</p>
            <p style={{color: validar.numero ? "green" : "red"}}>La contraseña debe incluir al menos un número.</p>
            <p style={{color: validar.caracter ? "green" : "red"}}>La contraseña debe incluir al menos un signo (@,!,$,%,&,#).</p>
            <p style={{color: validar.espacios ? "green" : "red"}}>La contraseña no debe contener espacios.</p>
            <p style={{color: validar.coincidir ? "green" : "red"}}>Las contraseñas deben coincidir.</p>
        </>
    )
}