import "./navbar.css";
import { useContext } from "react";
import StoreContext from '../state/storeContext'; 

import { Link } from "react-router-dom";

function NavBar() {
  let user = useContext(StoreContext).user;
  let cart = useContext(StoreContext).cart;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="# KICK'IN UP HEELS">
          👠KICK'IN UP HEELS        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <label htmlFor="user-name">{user.name}</label>
            <Link className="btn btn-outline-dark" to="/cart">
               <label className="count">{cart.length}</label>
              <i className="fas fa-cart-shopping"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
