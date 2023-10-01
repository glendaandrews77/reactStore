import { useState } from 'react';
import './admin.css';

function Admin() {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllPropducts] = useState([]);

    function handleSaveProduct() {
        console.log('product', product);
    }

    function handleProductChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    }

    function handleSaveCoupon() {
        console.log(coupon);
    
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }
    

    function handleSaveCoupon() {
        console.log('coupon', coupon);
    }

    function handleCouponChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        let copy = { ...coupon };
        copy[name] = value;
        setCoupon(copy);
    }

    return (
        <div className="admin">
            <h1>Administration</h1>
            <div className="forms-container">

                {/* Product Form */}
                <div className="form">
                    <h3>Store Admin</h3>
                    <div>
                        <label className="form-label">Title</label>
                        <input type="text" onChange={handleProductChange} name="title" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Category</label>
                        <input type="text" onChange={handleProductChange} name="category" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Image</label>
                        <input type="text" onChange={handleProductChange} name="image" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price</label>
                        <input type="text" onChange={handleProductChange} name="price" className="form-control" />
                    </div>
                    <div>
                        <button onClick={handleSaveProduct} className="btn btn-dark">Save Product</button>

                    </div>
                    <ul>
                        {allProducts.map((prod) => (
                        <li key={coupon.code}>
                            {coupon.code} - {coupon.product}
                            {prod.title} = {prod.price}
                            </li>
                        ))}

                    </ul>
                </div>

                {/* Coupon Form */}
                <div className="form">
                    <h3>Create Coupons</h3>
                    <div>
                        <label className="form-label">Code</label>
                        <input onChange={handleCouponChange} name="code" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Discount</label>
                        <input onChange={handleCouponChange} name="discount" type="text" className="form-control" />
                    </div>
                    <div>
                        <button onClick={handleSaveCoupon} className="btn btn-dark">Save Coupon</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Admin;


