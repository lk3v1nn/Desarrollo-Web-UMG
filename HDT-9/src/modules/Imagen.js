import Image from "react-bootstrap/Image";
import React from "react";
import '../styles/Imagen.css'

function FluidExample({ dato }) {
  return (
    <>
      {dato.map((cat) => {
        return (
            <img
            src={cat.url}
            key={cat.id}
            className='img-thumbnail img'
            alt='...'
          />
        );
      })}
    </>
  );
}

export { FluidExample };
