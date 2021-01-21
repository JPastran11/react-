import React , { useEffect, useState } from 'react'
import ItemList from './ItemList.js'
import { useParams } from 'react-router-dom'


function ItemListContainer ({greeting, products}) {

    const [items,setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        if(id){
            const category = products.filter(product => product.categoryId === id)
            setItems(category)
        }
        else{
            setItems(products)
        }

    }, [id, products])

    return (
        <div>
            <h2>{greeting}</h2>


            {products.length > 0 ? <ItemList products={items} /> : <h2>Loading</h2>}           
        </div>
    )
}

export default ItemListContainer