"use client"

import TarjetaCarrito from "./components/TarjetaCarrito";
import "./styles/carrito.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Carrito() {
    const [productos, setProductos] = useState();

    useEffect(() => {
        buscarProductosCliente();
    }, []);

    const buscarProductosCliente = async () => {
        const axiosInstance = axios.create({
            withCredentials: true,
        });
        axiosInstance.get(
            "http://localhost:8000/api/carrito"
        ).then((res) =>{
            console.log(res.data)
            setProductos(res.data);
            console.log(productos);
        }).catch(()=>{
            console.log('Error al recuperar los datos')
        })
    };

    return (
        <div className="container">
            <div className="products">
                {productos &&
                    productos.map((v) => (
                        <TarjetaCarrito
                            key={v._id}
                            nombre={v.Nombre}
                            descripcion={v.Descripcion}
                            cantidad={v.cantidad}
                            precio = {v.precio}
                        />
                    ))}
            </div>
            <div className="info"></div>
        </div>
    );
}