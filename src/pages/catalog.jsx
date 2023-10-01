import { useEffect, useState } from 'react';
import Product from "../components/product";
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsDisplay, setProdsDisplay] = useState([]);

    async function loadCatalog() {
        let service = new DataService();
        try {
            let prodList = await service.getCatalog();
            setProducts(prodList);
            setProdsDisplay(prodList);
            loadCategory(prodList);
        } catch (error) {
            console.error("Failed to load catalog:", error);
        }
    }

    useEffect(() => {
        console.log("catalog loaded");
        loadCatalog();
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

    function loadCategory(prods) {
        let uniqueCategories = [...new Set(prods.map(prod => prod.category))];
        setCategories(uniqueCategories);
    }

    return (
        <div className="catalog page">
            <br />
            <button onClick={clearFilter} className='btn btn-sm btn-secondary btn-filter'>All</button>
            {categories.map(c => <button key={c} onClick={() => filter(c)} className='btn btn-sm btn-secondary btn-filter'>{c}</button>)}
            <br />
            <div className='product-container'>
                {prodsDisplay.map(p => <Product key={p._id} data={p} />)}
            </div>
        </div>
    );
}

export default Catalog;
