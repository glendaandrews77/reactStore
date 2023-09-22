import { useEffect, useState } from 'react';
import Product from "../components/product";
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsDisplay, setProdsDisplay] = useState([]);

    function loadCatalog() {
        let service = new DataService();
        let prodList = service.getCatalog();
        setProducts(prodList);
        setProdsDisplay(prodList);
        
    }

    useEffect(() => {
        console.log("catalog loaded");
        loadCatalog();
        loadCategory();
    }, []);

    function filter(category) {
        console.log("filter clicked");
        let list = products.filter(prod => prod.category === category);
        setProdsDisplay(list);
        console.log("Category to filter:", category);

    }

    function clearFilter() {
        setProdsDisplay(products);
    }

    function loadCategory() {
        // let service = new DataService();
        let prods = prodsDisplay;
        console.log(prods);
        let tempCategories = ["Sexy Heels", "Boots", "Boot Heels", "Wide Calf Boots"]
        setCategories(tempCategories);
        //setProdsDisplay(prods);
    }

    return (
        <div className="catalog">
        
            <br />
            <button onClick={clearFilter} className="btn btn-dark-filter">All</button>
            {categories.map(c => <button key={c} onClick={() => filter(c)} className='btn btn-sm btn-primary btn-filter'>{c}</button>)}
            <br />
            <div className='product-container'>

            {prodsDisplay.map(p => <Product key={p._id} data={p} />)}
            </div>
        </div>
    );
}

export default Catalog;
