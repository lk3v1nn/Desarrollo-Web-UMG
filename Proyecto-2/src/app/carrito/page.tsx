"use client";
import TarjetaCarrito from "./components/TarjetaCarrito";
import "./styles/carrito.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Carrito() {
    const [productos, setProductos] = useState();

    const buscarProductosCliente = async () => {
        try {
            const axiosInstance = axios.create({
                withCredentials: true,
            });
            const data = await axiosInstance.get(
                "http://localhost:8000/api/carrito"
            );
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        buscarProductosCliente();
    }, []);

    const consultaProductos = (Identificador: String) => {
        try {
            axios.get(`http://localhost:8000/api/producto/${Identificador}`)
        } catch (error) {
            console.log('Producto no encontrado')
        }
    };

    return (
        <div className="container">
            <div className="products">
                <TarjetaCarrito
                    nombre="hola"
                    descripcion="descripcion"
                    cantidad="cantidad"
                />
                <TarjetaCarrito
                    nombre="2"
                    descripcion="descripcion"
                    cantidad="cantidad"
                />
            </div>
            <div className="info"></div>
        </div>
    );
}
