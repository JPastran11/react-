import React, { useContext } from 'react';
import { CartContext } from './CartContext';


function CartWidget() {
    const { quantity } = useContext(CartContext)

    return (
        <div
        >
            { quantity > 0 && 
            <>
            
            <h4>{quantity}</h4>
            </>}
        </div>
    )
}

export default CartWidget