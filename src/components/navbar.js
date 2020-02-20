import React from 'react';
import {NavLink} from 'react-router-dom'



const Navbar = (props) => (

    <nav>
        <h1 class="logo"><a class="logo-link" href="#">{props.title}</a></h1>
        <ul class="nav-menu">
            <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/actors">Best Actors</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/actress">Best Actress</NavLink></li>
            <li><NavLink className="nav-menu__link" to="/films">Best Films</NavLink></li>
        </ul>
    </nav>

);

export default Navbar;