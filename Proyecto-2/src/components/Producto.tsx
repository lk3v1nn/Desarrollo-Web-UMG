import "../styles/Producto.css";
import React from "react";

export default function Producto(props: {
    categorias: Array<string>;
    nombre: String;
    descripcion: string;
    descuento: String;
    precioDescuento: String;
    imagen: String;
}) {
    return (
        <>
            <div className="product-card">
                <div className="product-tumb">
                    <img src={props.imagen} alt="" />
                </div>
                <div className="product-details">
                    <div className="product-catagory">
                        {props.categorias &&
                            props.categorias.map((c, index) => {
                                return (
                                    <span
                                        className="catagory"
                                        key={index}
                                    >
                                        {c}
                                    </span>
                                );
                            })}
                    </div>
                    <h4>
                        <a href="">{props.nombre}</a>
                    </h4>
                    <p>{props.descripcion}</p>
                    <div className="product-bottom-details">
                        <div className="product-price">
                            <small>Antes: Q {props.descuento}</small>
                            <h4>Ahora: Q {props.precioDescuento}</h4>
                        </div>
                    </div>
                    <button className="my-4 bg-indigo-600 hover:bg-blue-700 text-white py-2 px-2 ">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
}
