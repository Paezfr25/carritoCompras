import { useContext } from "react";
import { dataContext } from "./DataContext";
import "../estilos/CartItemCounter.css";

const CartItemCounter = ({product }) => {
  const {cart, setCart,  buyProducts } = useContext(dataContext);

  const decrese = () => {
    const productrepeat = cart.find((item) => item.id === product.id);  

   
    productrepeat.quanty !== 1 &&
    setCart(cart.map((item => item.id === product.id ? {...product, quanty: productrepeat.quanty - 1} : item )));
};

  return (
   <>
    <button className="menos"  onClick={(decrese)}>-</button>
    <p className="product">{product.quanty}</p>
    <button className="mas" onClick={ () => buyProducts(product)}>+</button>
    </>
  );
}

export default CartItemCounter