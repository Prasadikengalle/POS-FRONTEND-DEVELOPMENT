import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/products' element={<Product/>} />
                </Routes>
            </BrowserRouter>
        
    )
}

export default App;
