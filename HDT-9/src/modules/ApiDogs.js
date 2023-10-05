import React from "react";
import { Imagen2 } from "./Imagen2";

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

  return <>{!dogs ? "Cargando" : <Imagen2 dato={dogs} />}</>;
}

export { ApiDogs };
