import React, {createContext, useState} from 'react';
import {CartData} from '../Data/cartData';
export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartData, setCartData] = useState(CartData);
  const addToCart = product => {
    //console.log('add');
    let newCart = [...cartData];
    for (let index = 0; index < newCart.length; index++) {
      if (newCart[index].productId === parseInt(product.productId)) {
        newCart[index].quantity += parseInt(product.quantity);
        setCartData(newCart);
        return;
      }
    }
    newCart.push(product);
    setCartData(newCart);
  };
  const removeFromCart = id => {
    //console.log('remove');
    let newCart = [...cartData];
    newCart = newCart.filter(
      productCart => productCart.productId !== parseInt(id),
    );
    setCartData(newCart);
  };
  const updateQuantity = product => {
    let newCart = [...cartData];
    for (let index = 0; index < newCart.length; index++) {
      if (newCart[index].productId === parseInt(product.id)) {
        newCart[index].quantity = product.quantity;
        break;
      }
    }
    //console.log('update', product.quantity);
    setCartData(newCart);
  };
  const clearCart = () => {
    setCartData([]);
  };
  return (
    <CartContext.Provider
      value={{cartData, addToCart, removeFromCart, updateQuantity, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
