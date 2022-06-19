import React from 'react';
import { Header } from '../styles/styles';

export default function Cabecera({cantidad}) {
  return (
    <Header>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <span>{cantidad}</span></p>
    </Header>
  )
}
