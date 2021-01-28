import React, { useState, useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';


function ProductosContainer ({ item, id, add, substract, cantidadDetail }) {
    const [ open, setOpen ] = useState(false)

    const { addToCart } = useContext(CartContext)
    

    function addAndOpen(item, cantidadDetail, id){
        addToCart(item, cantidadDetail, id);
        setOpen(true)
    }
    return (
        <div>
            <div>
                <Button variant="contained" onClick={substract}>-</Button>
                    <h3>{cantidadDetail}</h3>
                <Button variant="contained" onClick={add}>+</Button>
            </div>
            
            { !open ? (<div>
                <Button variant="contained" color="primary" onClick={ () => addAndOpen(item, cantidadDetail, id)}>
                  <h3>Agregar al <ShoppingCartIcon /> </h3>
                </Button>
            </div>) : 
            (<div>
                <Link to="/cart">
                    <Button variant="contained" color="primary" >
                        <h3>Terminar la compra</h3>
                    </Button>
                </Link>
            </div>) }
        </div>
    )
}

export default ProductosContainer
