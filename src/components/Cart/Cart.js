import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartCount, addValue,cartItems } = useContext(CartContext);
console.log(cartItems)
  return (
    <div>
      <h1>Carrito de compras </h1>
      <br />
      Tienes {cartCount} productos en tu carrito
      <br />
      <Link to="/checkout">
      <Button> Terminar con la compra</Button>
</Link>      

      <br />
      <Link to="/products">Seguir comprando</Link>
    </div>
  );
};

export default Cart;
