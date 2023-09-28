import React from "react";
import "../styles/Tarjeta.css";
// @ts-ignore
// let img "../img/pr.jpg";
function Tarjeta(props) {
  return (
    <div className="card text-center ">
      <div className="overflow">
        <img
          className="img"
          src={props.imagen}
          // className="card-img-top"
          alt={"nocarga"}
          // style={{ height: "250px"}}
        />
      </div>
      <div className="card-body">
        <h5>{props.descripcion}</h5>
        <p className="text">{props.descripcion}</p>
        <p className="price">{props.precio}</p>
        <button className="btn btn-outline-primary">{props.boton}</button>
      </div>
    </div>
  );
}

export { Tarjeta };
