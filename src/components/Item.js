import React, { useState } from "react";
import {Producto} from '../styles/styles';

const Item = ({producto, handlerCantidad}) =>{
  const [stock, setStock] = useState(producto.stock);

  const handlerStock = () => {
    if(stock > 0 ) {
      setStock(stock => stock - 1);
      handlerCantidad();
    }
  }

  return (
    <Producto>
      <h3>{producto.producto.nombre}</h3>
      <p>{producto.producto.descripcion}</p>
      <h5>En Stock: {stock === 0 ? <span className="agotado">agotado</span> : <span>{stock}</span>}</h5>
      <button className={stock === 0 ? "noStock" : "siStock"} onClick={() => handlerStock()} disabled={stock===0} >{stock === 0 ? "sin stock" : "comprar"} </button>
    </Producto>
  )
}

export default Item
