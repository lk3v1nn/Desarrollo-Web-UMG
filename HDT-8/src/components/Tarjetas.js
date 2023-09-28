import React from "react";
// @ts-ignore
import { Tarjeta } from "./Tarjeta.js";

// const productos = [
//   {
//     id: 1,
//     Nombre: "Playera 1",
//     Descripcion: "Playera de algodón",
//     Precio: "$200",
//     Categoria: "Playeras",
//     Imagen: "Playera 1",
//   },
//   {
//     id: 2,
//     Nombre: "Playera 2",
//     Descripcion: "Playera de manga corta",
//     Precio: "$150",
//     Categoria: "Playeras",
//     Imagen: "Playera 2",
//   },
//   {
//     id: 3,
//     Nombre: "Playera 3",
//     Descripcion: "Playera de cuello redondo",
//     Precio: "$180",
//     Categoria: "Playeras",
//     Imagen: "Playera 3",
//   },
//   {
//     id: 4,
//     Nombre: "Playera 4",
//     Descripcion: "Playera de tirantes",
//     Precio: "$120",
//     Categoria: "Playeras",
//     Imagen: "Playera 4",
//   },
//   {
//     id: 5,
//     Nombre: "Playera 5",
//     Descripcion: "Playera de manga larga ",
//     Precio: "$220",
//     Categoria: "Playeras",
//     Imagen: "Playera 5",
//   },
//   {
//     id: 6,
//     Nombre: "Pantalon 1",
//     Descripcion: "Pantalon de algodón",
//     Precio: "$200",
//     Categoria: "Pantalones",
//     Imagen: "Pantalon 1",
//   },
//   {
//     id: 7,
//     Nombre: "Pantalon 2",
//     Descripcion: "Pantalon de manga corta",
//     Precio: "$150",
//     Categoria: "Pantalones",
//     Imagen: "Pantalon 2",
//   },
//   {
//     id: 8,
//     Nombre: "Pantalon 3",
//     Descripcion: "Pantalon de cuello redondo",
//     Precio: "$180",
//     Categoria: "Pantalones",
//     Imagen: "Pantalon 3",
//   },
//   {
//     id: 9,
//     Nombre: "Pantalon 4",
//     Descripcion: "Pantalon de tirantes",
//     Precio: "$120",
//     Categoria: "Pantalones",
//     Imagen: "Pantalon 4",
//   },
//   {
//     id: 10,
//     Nombre: "Pantalon 5",
//     Descripcion: "Pantalon de manga larga",
//     Precio: "$220",
//     Categoria: "Pantalones",
//     Imagen: "Pantalon 5",
//   },
//   {
//     id: 11,
//     Nombre: "Zapato 1",
//     Descripcion: "Zapato de baloncesto",
//     Precio: "$200",
//     Categoria: "Zapatos",
//     Imagen: "Zapato 1",
//   },
//   {
//     id: 12,
//     Nombre: "Zapato 2",
//     Descripcion: "Zapato casual",
//     Precio: "$150",
//     Categoria: "Zapatos",
//     Imagen: "Zapato 2",
//   },
//   {
//     id: 13,
//     Nombre: "Zapato 3",
//     Descripcion: "Zapato deportivo",
//     Precio: "$180",
//     Categoria: "Zapatos",
//     Imagen: "Zapato 3",
//   },
//   {
//     id: 14,
//     Nombre: "Zapato 4",
//     Descripcion: "Zapato streetware",
//     Precio: "$120",
//     Categoria: "Zapatos",
//     Imagen: "Zapato 4",
//   },
//   {
//     id: 15,
//     Nombre: "Zapato 5",
//     Descripcion: "Zapato de cuero",
//     Precio: "$220",
//     Categoria: "Zapatos",
//     Imagen: "Zapato 5",
//   },
//   {
//     id: 16,
//     Nombre: "Gorra 1",
//     Descripcion: "Gorra de algodón con estampado",
//     Precio: "$200",
//     Categoria: "Gorras",
//     Imagen: "Gorra 1",
//   },
//   {
//     id: 17,
//     Nombre: "Gorra 2",
//     Descripcion: "Gorra de manga corta para hombre",
//     Precio: "$150",
//     Categoria: "Gorras",
//     Imagen: "Gorra 2",
//   },
//   {
//     id: 18,
//     Nombre: "Gorra 3",
//     Descripcion: "Gorra de cuello redondo para mujer",
//     Precio: "$180",
//     Categoria: "Gorras",
//     Imagen: "Gorra 3",
//   },
//   {
//     id: 19,
//     Nombre: "Gorra 4",
//     Descripcion: "Gorra de tirantes para niño",
//     Precio: "$120",
//     Categoria: "Gorras",
//     Imagen: "Gorra 4",
//   },
//   {
//     id: 20,
//     Nombre: "Gorra 5",
//     Descripcion: "Gorra de manga larga unisex",
//     Precio: "$220",
//     Categoria: "Gorras",
//     Imagen: "Gorra 5",
//   },
//   {
//     id: 21,
//     Nombre: "Sueter 1",
//     Descripcion: "Sueter de algodón con estampado",
//     Precio: "$200",
//     Categoria: "Sueteres",
//     Imagen: "Sueter 1",
//   },
//   {
//     id: 22,
//     Nombre: "Sueter 2",
//     Descripcion: "Sueter de manga corta para hombre",
//     Precio: "$150",
//     Categoria: "Sueteres",
//     Imagen: "Sueter 2",
//   },
//   {
//     id: 23,
//     Nombre: "Sueter 3",
//     Descripcion: "Sueter de cuello redondo para mujer",
//     Precio: "$180",
//     Categoria: "Sueteres",
//     Imagen: "Sueter 3",
//   },
//   {
//     id: 24,
//     Nombre: "Sueter 4",
//     Descripcion: "Sueter de tirantes para niño",
//     Precio: "$120",
//     Categoria: "Sueteres",
//     Imagen: "Sueter 4",
//   },
//   {
//     id: 25,
//     Nombre: "Sueter 5",
//     Descripcion: "Sueter de manga larga unisex",
//     Precio: "$220",
//     Categoria: "Sueteres",
//     Imagen: "Sueter 5",
//   },
// ];


function Tarjetas({productos}) {
  return (
    <div className="container d-flex justify-content-center h-100 w-100 animate__animated animate__bounceInLeft">
      <div className="row">
        {productos.map((p) => (
          <div className="col-md-3" key={p.id}>
            <Tarjeta
              titulo={p.Nombre}
              descripcion={p.Descripcion}
              precio={p.Precio}
              boton={"Comprar"}
              imagen={"./img/" + p.Imagen + ".png"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Tarjetas };
