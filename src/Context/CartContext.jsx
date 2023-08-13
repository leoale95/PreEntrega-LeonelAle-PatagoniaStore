import { createContext, useState, useContext } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  updateItemQuantity: () => {},
  totalQuantity: 0,
  total: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const index = cart.findIndex(prod => prod.id.toString() === itemId.toString());
    if (index !== -1) {
      const cartUpdated = [...cart];
      cartUpdated.splice(index, 1);
      setCart(cartUpdated);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id.toString() === itemId.toString());
  };

  const updateItemQuantity = (itemId, quantity) => {
    if (isInCart(itemId)) {
      setCart(prev => prev.map(item => {
        if (item.id.toString() === itemId.toString()) {
          return { ...item, quantity };
        }
        return item;
      }));
    } else {
      console.error('El producto no está en el carrito');
    }
  };

  // Calcula la cantidad total de productos en el carrito
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Calcula el total del carrito en función de los precios y cantidades
  const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, updateItemQuantity, totalQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Función de utilidad para acceder al contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
