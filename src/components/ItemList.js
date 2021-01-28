
import React from 'react';
import Item from './Item';


function ItemList( { products }) {

    return (
        <div>
            { products.map( product => <Item key={product.id} id={product.id} 
            name={product.name} image={product.image} />)
            }
        </div>
    )
}

export default ItemList