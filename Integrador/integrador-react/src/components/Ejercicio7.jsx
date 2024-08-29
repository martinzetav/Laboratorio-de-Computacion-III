import { useState } from "react"

export default function Ejercicio7(){

    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [masCaro, setMasCaro] = useState("");
    const [precioPromedio, setPrecioPromedio] = useState("");

    const agregarProducto = (e) =>{
        e.preventDefault();
        const nuevoProducto = {nombre, precio: parseFloat(precio)};
        const listaProductos = [...productos, nuevoProducto];
        setProductos(listaProductos);
        setNombre("");
        setPrecio("");

        const productoMasCaro = listaProductos.reduce((productoCaro, producto)=>(
            producto.precio > productoCaro.precio ? producto : productoCaro
        ), listaProductos[0]);

        setMasCaro(`El producto mas caro es ${productoMasCaro.nombre} con un precio de ${productoMasCaro.precio}`);

        const totalPrecio = listaProductos.reduce((ac, producto) => ac + producto.precio, 0);
        const promedio = totalPrecio / listaProductos.length;
        setPrecioPromedio(`El precio promedio de los productos es de ${promedio}`);
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="nombre">Producto:</label>
                    <input type="text" id="nombre" value={nombre} onChange={e=>setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" value={precio} onChange={e => setPrecio(parseFloat(e.target.value))}/>
                </div>
                <button type="submit" onClick={agregarProducto}>Agregar</button>
            </form>
            <div>
                <span>{masCaro}</span>
            </div>
            <div>
                <span>{precioPromedio}</span>
            </div>
        </>
    )
}