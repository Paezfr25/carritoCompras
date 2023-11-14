import { useContext } from "react";
import { dataContext } from "./DataContext";
import "../estilos/Products.css";



const Products = () => { 
const { data,  buyProducts } = useContext(dataContext);



return data.map((product) => {
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button onClick={ () => buyProducts(product)}>buy</button>
        </div>
    );
});
     
};

export default Products