import React from "react";
import Form from "react-bootstrap/Form";
import { ApiPokemon } from "./ApiPokemon";

function ListaPokemon() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <div className="col-6 d-flex justify-content-center flex-column m-4 col-4">
        <Form.Select
          aria-label="Default select example"
          onChange={(evento) => {
            setValue(evento.target.value);
          }}
        >
          <option>Selecciona un pokemon</option>
          <option value="1">Bulbasour</option>
          <option value="4">Charmander</option>
          <option value="7">squirtle</option>
          <option value="150">Mewto</option>
        </Form.Select>
        <div className="col-12 m-4">
          <ApiPokemon num={value} />
        </div>
      </div>
    </>
  );
}

export { ListaPokemon };
