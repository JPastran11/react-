import React from 'react'
import CartWidget from './CartWidget'



const NavBar = () => {
    return (
        <nav>
            <p><a href="#">Home</a></p>
            <p><a href="#">Contador</a></p>
            <p><a href="#">Contacto</a></p>
            <CartWidget/>
        </nav>
    )
}

export default NavBar