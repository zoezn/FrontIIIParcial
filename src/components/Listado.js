import React from 'react';
import data from "./data.json";
import Item from "./Item";
import {Container} from '../styles/styles';

export default function Listado({handlerCantidad}) {
  return (
    <Container>
        {
          data.map (d =>
            <Item key= {d.id} producto={d} handlerCantidad={handlerCantidad}/>
            
            )
        }
    </Container>
  )
}
