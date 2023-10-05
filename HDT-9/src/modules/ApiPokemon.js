import React from "react";
import { ImagenPokemon } from "./ImagenPokemon";

function ApiPokemon({ num }) {
    const [pokemon, setPokemon] = React.useState();

    const consumirApi = async () => {
        try {
            const datos = await fetch(
                `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${num}.svg`
            );
            setPokemon(datos.url);
        } catch {
            console.log("Error al consumir API");
        }
    };

    React.useEffect(() => {
        consumirApi();
    }, [num]);

    return <ImagenPokemon dato={pokemon} />;
}

export { ApiPokemon };
