import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';



function Cart() {
    
    const { cart, clearCart, total } = useContext(CartContext)

    return (
        <div>
            { cart.length > 0 ? (
            <h1>Dale, compra!</h1>
            )    
            :
            ( <>
            <h1>Aún no elegiste tus productos</h1>
                <Link to={"/"}>
                <Button onClick={clearCart} variant="contained" color="primary">
                    Llevame a tus fantásticos productos
                </Button>
            </Link>
            </>)}
            <div>
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div>
                <Button onClick={clearCart} variant="contained">
                    Borrar Todo
                </Button>
                <Button onClick={() => {console.log(cart)}} variant="contained">
                    A pagar! 
                </Button>
            </div>
            </>}
        </div>
    )
}

export default Cart