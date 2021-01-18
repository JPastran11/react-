import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/materialize.css'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';




const NavBar = () => {
    return (
        <nav>
    <div className="card-panel teal lighten-2">
      
      <ul id="nav-mobile" className="navBar">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/ShopNow">Shop Now</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <CartWidget/>
    </div>
  </nav>
    )
}

export default NavBar