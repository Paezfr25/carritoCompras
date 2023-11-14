import React, { useContext, useEffect } from 'react';
import { dataContext } from "./DataContext";
import "../estilos/CartContent.css"
import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import Navbar from "./Navbar";

const Cartcontent = () => {
  const { cart, setCart } = useContext(dataContext);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    console.log('Cargando datos del carrito:', storedCart);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Guardando datos del carrito:', cart);
  }, [cart]);
 
return (
  <>
   <Navbar /> 
   {cart.length > 0 ? (
    <>
    <CartElement /> 
    <CartTotal />
    </>
   ) : (
    <h2 className="cart-message-center">your cart is empty</h2>

   )}
  </>
)
};

export default Cartcontent;