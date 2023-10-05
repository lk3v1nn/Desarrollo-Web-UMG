import Image from "react-bootstrap/Image";
import React from "react";

function ImagenPokemon({ dato }) {
  return (
      <Image src={dato} key={dato} alt="..." />
  );
}

export { ImagenPokemon };
