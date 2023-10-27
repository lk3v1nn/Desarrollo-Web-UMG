import "../styles/Producto.css";
import React from "react";

export default function Producto(props: {
    categorias: Array<string>;
    nombre: String;
    descripcion: string;
    descuento: String;
    precioDescuento: String;
    imagen: String
}) {
    return (
        <>
            <div className="product-card">
                <div className="product-tumb">
                    <img src={props.imagen} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">{props.categorias.join(' ')}</span>
                    <h4>
                        <a href="">{props.nombre}</a>
                    </h4>
                    <p>{props.descripcion}</p>
                    <div className="product-bottom-details">
                        <div className="product-price">
                            <small>Q {props.descuento}</small><h4>Q {props.precioDescuento}</h4>
                        </div>
                    </div>
                    <button className="my-4 bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Agregar
                    </button>
                </div>
            </div>
        </>
    );
}
