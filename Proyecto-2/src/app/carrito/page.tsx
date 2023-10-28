"use client";
import TarjetaCarrito from "./components/TarjetaCarrito";
import "./styles/carrito.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function carrito() {
  const [productos, setProductos] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/carrito")
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
