import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";


const App = () => {
  return <div>
    <BrowserRouter>
    <Routes>
    <Route exact path="/"  element={<Home />} />
    <Route   exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} /> 
    <Route exact path="/cart" element={<Cart />} /> 
    <Route exact path="/product" element={<Product />} /> 
    <Route exact path="/productlist" element={<ProductList />} /> 
    </Routes>
    </BrowserRouter>
    
   
  </div>;
};

export default App;