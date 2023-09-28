import React from "react";
import "../styles/Nav.css";

const url = "#";

function Nav({ dbProductos, productos, setProductos }) {
  const [categoriaActiva, setCategoriaActiva] = React.useState("");
  return (
    <ul className="nav nav-tabs col-md-12">
      <li className="nav-item">
        <a
          className={`nav-link ${categoriaActiva === "Todo" ? "active" : ""}`}
          aria-current="page"
          href={url}
          onClick={() => {
            setProductos(dbProductos);
            setCategoriaActiva("Todo");
          }}
        >
          Todo
        </a>
      </li>
      <li className={`nav-item`}>
        <a
          className={`nav-link ${
            categoriaActiva === "Playeras" ? "active" : ""
          }`}
          aria-current="page"
          href={url}
          onClick={
            () => {
              setProductos(
                dbProductos.filter((p) => p.Categoria == "Playeras")
              );
              setCategoriaActiva("Playeras");
            }
            // style ={{color :blue}}
          }
        >
          Playeras
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            categoriaActiva === "Pantalones" ? "active" : ""
          }`}
          href={url}
          onClick={() => {
            setProductos(
              dbProductos.filter((p) => p.Categoria === "Pantalones")
            );
            setCategoriaActiva("Pantalones");
          }}
        >
          Pantalones
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            categoriaActiva === "Zapatos" ? "active" : ""
          }`}
          href={url}
          onClick={() => {
            setProductos(dbProductos.filter((p) => p.Categoria === "Zapatos"));
            setCategoriaActiva("Zapatos");
          }}
        >
          Zapatos
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${categoriaActiva === "Gorras" ? "active" : ""}`}
          href={url}
          onClick={() => {
            setProductos(dbProductos.filter((p) => p.Categoria === "Gorras"));
            setCategoriaActiva("Gorras");
          }}
        >
          Gorras
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${
            categoriaActiva === "Sueteres" ? "active" : ""
          }`}
          href={url}
          onClick={() =>
            {setProductos(dbProductos.filter((p) => p.Categoria == "Sueteres"))
            setCategoriaActiva("Sueteres");}
          }
        >
          Sueteres
        </a>
      </li>
    </ul>
  );
}

export { Nav };
