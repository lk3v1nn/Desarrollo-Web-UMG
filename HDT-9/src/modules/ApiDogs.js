import React from "react";
import { ImgDog } from "./ImagenDog";

function ApiDogs() {
  const [dogs, setDogs] = React.useState([]);

  const consumirApi = async () => {
    try {
      const datos = await fetch("https://dog.ceo/api/breeds/image/random/8");
      const datosJson = await datos.json();
      setDogs(await datosJson.message);
    } catch {
      console.log("Error al consumir API");
    }
  };

  React.useEffect(() => {
    consumirApi();
  }, []);

  return <>{!dogs ? "Cargando" : <ImgDog dato={dogs} />}</>;
}

export { ApiDogs };
