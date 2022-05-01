import React, {createContext, useState, useEffect} from 'react';
export const CartContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartProvider = ({children}) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCart = async () =>  AsyncStorage.getItem('cart').then(data => {
      if(data) {
        setCartData(JSON.parse(data))
      }
    })
    fetchCart();
  }, [])

  const addToCart = product => {
    let newCart = [...cartData];
    for (let index = 0; index < newCart.length; index++) {
      if (newCart[index].productId === product.productId) {
        newCart[index].quantity += parseInt(product.quantity);
        AsyncStorage.setItem('cart', JSON.stringify(newCart));

        setCartData(newCart);
        return;
      }
    }
    newCart.push(product);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
    setCartData(newCart);
  };
  const removeFromCart = id => {
    let newCart = [...cartData];
    newCart = newCart.filter(productCart => productCart.productId !== id);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
    setCartData(newCart);
  };
  const updateQuantity = product => {
    let newCart = [...cartData];
    for (let index = 0; index < newCart.length; index++) {
      if (newCart[index].productId === product.id) {
        newCart[index].quantity = product.quantity;
        break;
      }
    }
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
    setCartData(newCart);
  };
  const clearCart = () => {
    AsyncStorage.setItem('cart', null);
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
