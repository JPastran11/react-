import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/materialize.css'
import {Link} from 'react-router-dom'




const NavBar = () => {
    return (
        <nav>
    <div class="card-panel teal lighten-2">
      
      <ul id="nav-mobile" class="navBar">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/ShopNow">Shop Now</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default NavBar