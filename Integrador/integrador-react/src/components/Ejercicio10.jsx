import { useState } from "react"

export default function Ejercicio10(){

    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("electricidad");
    const [precio, setPrecio] = useState("");

    const agregarProducto = (e) =>{
        e.preventDefault();
        if(nombre.trim() == ""){
            return alert("El campo nombre no puede estar vacio");
        }
        if(parseFloat(precio) <= 0.0){
            return alert("El campo numerico debe ser mayor a 0");
        }
        const nuevoProducto = {nombre, categoria, precio};
        const existe = productos.some(producto => producto.nombre.toUpperCase() == nuevoProducto.nombre.toUpperCase() && producto.categoria == nuevoProducto.categoria);
        if(existe){
            return alert("No se pueden agregar productos con el mismo nombre en la misma categoria");
        }

        const listaProductos = [...productos, nuevoProducto];
        setNombre("");
        setPrecio("");
        setCategoria("electricidad");
        setProductos(listaProductos);
    }

    const eliminarProducto = (producto, indice) =>{
        if(confirm(`¿Desea eliminar el producto ${producto.nombre} de la lista?`)){
            const productosFinales = productos.filter((p,i) => indice != i);
            setProductos(productosFinales);
        }
    }

    const resumenPorCategoria = (categoria) =>{
        const categoriaDeResumen = productos.filter(producto => producto.categoria == categoria);
        const precioTotal = categoriaDeResumen.reduce((ac, producto) => ac+producto.precio, 0);
        const cantidadTotal = categoriaDeResumen.length;
        return `Hay un total de ${cantidadTotal} productos, con un precio total de $${precioTotal}`;
    }
    return (
        <>
            <form>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={e=>setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria:</label>
                    <select id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
                        <option value="electricidad">Electricidad</option>
                        <option value="pintureria">Pintureria</option>
                        <option value="plomeria">Plomeria</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" value={precio} onChange={e=>setPrecio(parseFloat(e.target.value))}/>
                </div>
                <button type="submit" onClick={agregarProducto}>Agregar</button>
            </form>
            <ul>
                {productos.map((producto, indice) =>(
                    <li key={indice}>{producto.nombre}, ${producto.precio} - {producto.categoria}<button onClick={()=>eliminarProducto(producto, indice)}>X</button></li>
                ))}
            </ul>
            <h3>Resumen de Electricidad:</h3>
            <p>{resumenPorCategoria("electricidad")}</p>
            <h3>Resumen de Pintureria:</h3>
            <p>{resumenPorCategoria("pintureria")}</p>
            <h3>Resumen de Plomeria:</h3>
            <p>{resumenPorCategoria("plomeria")}</p>
        </>
    )
}