import "./navbar.css";
import { useContext } from 'react';
import StoreContext from '../state/storeContext';  // assuming the path is correct

import { Link } from 'react-router-dom';

function NavBar() {
    const { user } = useContext(StoreContext);  // Destructured for better readability

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Gigi's Kick'In Heels Closet</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">ALL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <label htmlFor="user-name">{user.name}</label>
                        <Link className="btn btn-outline-light" to="/cart">
                            <i className="fas fa-cart-shopping"></i>  {/* Adjust based on FontAwesome setup */}
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
