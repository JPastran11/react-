import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const categories = [{
    categoryId: "wheyprotein",
    name: "WHEYPROTEIN"
},
{
    categoryId: "glutamine",
    name: "GLUTAMINE"
}]

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to={"/"}><img src="https://static.ageofempires.com/aoe/wp-content/uploads/2020/01/aoe_logo_stacked-1.png" alt=""/></Link>
            </div>
            <div className="navbar__links">
                {/* Hago el mapeo. Cada categoría me va a llevar a su categoryId */}
                { categories.map( category => <Link to={`/category/${category.categoryId}`}>
                    <p>{category.name}</p>
                    </Link>)}
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/ShopNow">Shop Now</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                { /* Acá uso el ícono del carrito que importé */}
                <div className="navbar__cart">
                  <Link to={"/cart"}><CartWidget /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar


