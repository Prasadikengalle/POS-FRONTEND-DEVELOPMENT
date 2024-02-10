import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateProduct from './pages/UpdateProduct';
import Category from './pages/Category';

const App = () => {
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/products' element={<Product/>} />
                    <Route path="/products/:id" element={<SingleProduct/>}/>
                    <Route path="products/update/:productId" element={<UpdateProduct/>}/>
                    <Route path="/categories" element={<Category/>}/>
                </Routes>
            </BrowserRouter>
        
    )
}

export default App;
