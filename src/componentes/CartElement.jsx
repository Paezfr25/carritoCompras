import React, { useContext } from "react";
import { dataContext } from "./DataContext";
import "../estilos/CartContent.css";
import CartItemCounter from "./CartItemCounter";

export const CartElement = () => {
  const { cart , setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
     const foudnId = cart.find((element) => element.id === id);

     const newCart = cart.filter((element)=> {
      return element !== foudnId;
     });

     setCart(newCart);
  };

  return cart.map((product, index) => (
    <div className="cartContent" key={index}>
      <img src={product.img} alt="product-card" />
      <h3 className="name">{product.name}</h3>
      <CartItemCounter product={product} />
      <h4 className="price">{product.price * product.quanty}$</h4>
      <button className="cart-delete-button" onClick={() => deleteProduct(product.id)}>❌</button>
    </div>
  ));
};

export default CartElement;