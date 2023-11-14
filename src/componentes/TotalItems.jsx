import { useContext } from "react";
import { dataContext } from "./DataContext";

const TotalItems = () => {
    const { cart } = useContext(dataContext);
  
    const itetmsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
    return  <span className="cart-items-total">{itetmsQuanty}</span>
   
}

export default TotalItems