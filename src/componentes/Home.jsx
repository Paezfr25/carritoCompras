import Navbar from "./Navbar";
import  Banner  from "./Banner";
import Products from "./Products";
const Home = () => {
   return (
       <>

       <Navbar />
       <Banner />
       <div className="product-card-container">
       <Products />
       </div>
       </>
        
   );

}

export default Home;