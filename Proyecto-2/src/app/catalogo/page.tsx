"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Catalogo.css";
import Producto from "./components/Producto";

export default function catalogo() {
    const [productos, setProducto] = useState();

    useEffect(() => {
        const respuestaAxios = axios
            .get("https://l5kbp6rc-8000.use2.devtunnels.ms/api/productos")
            .then((res) => {
                setProducto(res.data);
            })
            .catch(() => {
                console.log("Error al obtener los datos");
            });
    }, []);

    return (
        <div className="container">
            <div className="containerProducts">
                {productos &&
                    productos.map((producto: any) => (
                        <Producto
                            key={producto.id}
                            categorias={producto.Categorias}
                            nombre={producto.Nombre}
                            descripcion={producto.Descripcion}
                            descuento={producto.Descuento}
                            precioDescuento={producto.PrecioDescuento}
                            imagen={producto.Imagen}
                        />
                    ))}
            </div>
        </div>
    );
}
