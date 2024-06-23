import { useState } from "react"
import "./Ejercicio3.css"

export default function Ejercicio3(){

    const [direction, setDirection] = useState("row");
    const [justify, setJustify] = useState("flex-start");
    const [align, setAlign] = useState("stretch");

    return (
        <>
            <p> 3- Realizar una pagina en Vite con React con listas desplegables "select" que permitan modificar la dirección, justificado y alineado de tres "div" contenidos dentro de otro "div" empleando "flexbox". Tener en cuenta que este ejercicio se resolvió en clase en Javascript.</p> <hr />

            <div>
                <label>Flex-direction</label>
                <select value={direction} onChange={e => setDirection(e.target.value)}>
                    <option value="row">row</option>
                    <option value="row-reverse">row-reverse</option>
                    <option value="column">column</option>
                    <option value="column-reverse">column-reverse</option>
                </select>

                <label>Justify-content</label>
                <select value={justify} onChange={e => setJustify(e.target.value)}>
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-between">space-between</option>
                    <option value="space-around">space-around</option>
                </select>

                <label>Align-items</label>
                <select value={align} onChange={e => setAlign(e.target.value)}>
                    <option value="stretch">stretch</option>
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="centern">center</option>
                </select>
            </div>

            <div className="container" style={{flexDirection: direction, justifyContent: justify, alignItems: align}}>
                <div className="item1">CAJA 1</div>
                <div className="item2">CAJA 2</div>
                <div className="item3">CAJA 3</div>
            </div>
        </>
    )
}