import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  return (
    <div>
      {totalQuantity === 0 ? (
        <p>No hay items en el carrito.</p>
      ) : (
        <>
          {cart.map(p => <CartItem key={p.id} {...p} />)}
          <h3>Total: ${total}</h3>
          <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
          <Link to='/checkout' >Checkout</Link>
        </>
      )}
      <Link to="/" >Productos</Link>
    </div>
  );
};

export default Cart;
