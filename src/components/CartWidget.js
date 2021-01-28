import React, { useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from './CartContext';


function CartWidget() {
    const { quantity } = useContext(CartContext)

    return (
        <div className="cartWidget">
            { quantity > 0 && 
            <>
            <ShoppingCartIcon />
            <h4>{quantity}</h4>
            </>}
        </div>
    )
}

export default CartWidget