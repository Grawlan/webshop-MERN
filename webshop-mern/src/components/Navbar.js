import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from './shoppingCart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';




const Navbar = () => {
  
  const dispatch = useDispatch();

  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)
  const loggedIn = useSelector(state => state.authReducer.userToken)
  const isAdmin = useSelector(state => state.authReducer.admin)
  

  const logOut = e => {
    dispatch(logout())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
       
        <Link className="navbar-brand" to="/">CONSOLE</Link>

       
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
              <NavLink exact activeclassname="active" className="nav-link"to="/about">About</NavLink>
            </li>
          </ul>
      
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart"></i>
                { totalCartQuantity > 0 && <span className="badge rounced-pill badge-notification bg-light text-dark">{totalCartQuantity}</span>}
              </span>
              <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                <ShoppingCart />
              </ul>
            </li>
             <li className="nav-item dropdown">
              <span
                className="nav-link dropdown"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                { loggedIn && <i className="fas fa-user"></i> }
              </span> 
            
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <NavLink exact activeclassname="active" className="nav-link user-link" to="/users/userorders/">Order history</NavLink>
                </li>
                <li>
                  { isAdmin && <NavLink exact activeclassname="active" className="nav-link user-link" to="/users/adminorders">Admin</NavLink>}
                </li>
                <li>
                  <button className="btn btn-primary" onClick={logOut}>Logout</button>
                </li>
              </ul>
            </li>
            <li>
              { !loggedIn && <NavLink exact activeclassname="active" className="nav-link" to="/users/loginregister">Login</NavLink> }
            </li>
          </ul>
        </div>
      </div>
  </nav>
  
  )
}

export default Navbar
