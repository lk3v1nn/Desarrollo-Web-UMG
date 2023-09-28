import './styles/App.css';
import React from 'react';
import {dbProductos} from './productos.js';

// @ts-ignore
import {Tarjetas} from './components/Tarjetas.js'
import {Nav} from "./components/Nav.js"
import {Footer} from './components/footer'

function App() {
  const [productos, setProductos] = React.useState(dbProductos);
  return (
    <div className="App">
      <Nav dbProductos={dbProductos} productos={productos} setProductos={setProductos}/>
      <Tarjetas productos ={productos}/>
      <Footer />
    </div>
  );
}

export default App;
