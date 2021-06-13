import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
       
        <NavLink className="navbar-brand" to="/">CONSOLE</NavLink>

       
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact activeclassname="active" className="nav-link" to="/">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink cexact activeclassname="active" className="nav-link"to="/about">About</NavLink>
            </li>
          </ul>
      
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown"
                href="#/"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="badge rounced-pill badge-notification bg-light text-dark">0</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                Shoppingcart
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown"
                href="#/"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </a>
            
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <NavLink exact activeclassname="active" className="nav-link" to="/users/usercontrol">Order history</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact activeclassname="active" className="nav-link" to="/users/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  
  )
}

export default Navbar
