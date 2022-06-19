
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import React, { useState } from "react";
import {AppStyled} from "./styles/styles.js";

function App() {
  const [cantidad, setCantidad] = useState(0);

const handlerCantidad = () => {
  setCantidad(cantidad => cantidad + 1)
}

  return (
    <AppStyled>
      <Cabecera cantidad={cantidad}/>
      <Listado handlerCantidad={handlerCantidad}/> 
    </AppStyled>
  );
}

export default App;
