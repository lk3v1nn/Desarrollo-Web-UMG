import React from "react";
import "./styles/App.css";
import Navegador from "./modules/Nav.js";
import { Hola } from "./modules/Inicio.js";
import { ApiCats } from "./modules/ApiCats.js";
import { ApiDogs } from "./modules/ApiDogs";
import { ListaPokemon } from "./modules/ListaPokemon";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navegador />
      <Routes>
        <Route path="/" element={<Hola />} />
        <Route path="/cats" element={<ApiCats />} />
        <Route path="/dogs" element={<ApiDogs />} />
        <Route path="/pokemons" element={<ListaPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
