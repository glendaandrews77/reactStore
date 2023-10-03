import './App.css';
import About from './components/about';
import Home from './components/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import Admin from './pages/admin';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalState from './state/globalState';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
      <div className='app'>
    <GlobalState>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </GlobalState>
      </div>
  );
}

export default App;
