import React, { useState } from "react";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalAmount,setCartTotalAmount] = useState(0);

  const addValue = () => {
    setCartCount(cartCount + 1);
  };
  const removeValue = () => {
    setCartCount(cartCount -1);
  };


  const addToCart = (item,count)=>{
item.subtotal = count * item.unitPrice;

    setCartItems([...cartItems,{...item,count}]);

console.log(cartItems);

  }

  return (
    <CartContext.Provider value={{ addValue, cartCount,addToCart,removeValue,cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
