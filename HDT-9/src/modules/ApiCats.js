import React from 'react'
import {FluidExample} from './Imagen'


function ApiCats() {
    
    const [gato, setCat] = React.useState();

    const consumirApi = async () => {
    try {
        const datos = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=12"
        )
        setCat(await datos.json());
    } catch {
        console.log("Errorsote");
    }
    };

    React.useEffect(() => {
    consumirApi();
    }, []);
    
    return(
        <>
        {!gato ? "Cargando" : <FluidExample dato={gato} />} 
        </>
    )
}


export {ApiCats}