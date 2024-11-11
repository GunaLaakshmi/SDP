import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    
    const handleLogout = () => {
        // Logic to handle logout
        console.log("User logged out");
        // Implement your logout functionality here
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Rentique </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {/* <NavLink to="/login" className="nav-link mx-2 hover-link">
                            <i className="fas fa-sign-in-alt mr-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="nav-link mx-2 hover-link">
                            <i className="fas fa-user-plus mr-1"></i> Register
                        </NavLink> */}
                        <NavLink to="/cart" className="nav-link mx-2 hover-link">
                            <i className="fas fa-shopping-cart mr-1"></i> Cart ({state.length})
                        </NavLink>
                        <NavLink to="/" className="nav-link mx-2 hover-link" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt mr-1"></i> Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
