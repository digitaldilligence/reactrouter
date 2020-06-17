import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () =>{
    return (
        <nav className="nav-wrapper red">
            <div className="container">
                <a className="brand-logo">React Router</a>
                <ul className="right">
                    <li><NavLink to="/"><a href="/">Home</a></NavLink></li>
                    <li><NavLink to="/about"><a href="/about">About</a></NavLink></li>
                    <li><NavLink to="/contact"><a href="/contact">Contact</a></NavLink></li>
                </ul>
            </div>
        </nav>
    )
} 
export default Navbar;