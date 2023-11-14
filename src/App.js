import './App.css';
import Cartcontent from './componentes/Cartcontent';
import Home from './componentes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './componentes/DataContext';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
           <Route path="/cart" element={<Cartcontent/>}></Route> 
                      
       </Routes>
      </BrowserRouter>
      </DataProvider>
  );   

}

export default App;
