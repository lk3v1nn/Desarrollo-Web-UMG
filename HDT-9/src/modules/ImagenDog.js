import Image from "react-bootstrap/Image";
import React from "react";
import "../styles/Imagen.css";

function ImgDog({ dato }) {
  return (
    <>
      {dato.map((d) => {
        return (
          // <Image className="img" src={d} key={d} alt="nada" fluid />)
          <img src={d} key={d} className="img-thumbnail img" alt="..." />
        );
      })}
    </>
  );
}

export { ImgDog };
