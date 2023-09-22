import './App.css';
import About from './components/about';
import Home from './components/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
