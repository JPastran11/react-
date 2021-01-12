

import React , { useEffect, useState } from 'react'
import ItemList from './ItemList.js'
import ProductosContainer from './ProductosContainer.js'
import ItemDetailContainer from './ItemDetailContainer'


const productos = [
    {
        id : "1",
        title : "Digital Guide, Bye Bye Celulitis",
        price : 12.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0003/8030/5461/files/BBC-2_4714da68-0838-4325-85ba-891c7b33a44d.png?13241607669691707150",
        stock : 5,
    },
    {
        id : "2",
        title : "Chocolate",
        price : 39.99,
        pictureUrl : "https://saschafitnesscol.com/wp-content/uploads/2017/08/chocolate1.png",
        stock : 4
    },
    {
        id : "3",
        title : "Watermelon",
        price : 34.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237",
        stock : 6
    },
    {
        id : "4",
        title : "Vanilla",
        price : 39.99,
        pictureUrl : "https://saschafitnesscol.com/wp-content/uploads/2017/08/vanilla1.png",
        stock : 7
    },
    {
        id : "4",
        title : "Grape",
        price : 34.99,
        pictureUrl : "https://i.ebayimg.com/images/g/ZSgAAOSwJUdejhzG/s-l1600.jpg",
        stock : 7
    },
    {
        id : "4",
        title : "Mango Loco",
        price : 34.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0276/6084/5153/products/BCAA-mangococo1.jpg?v=1594222488",
        stock : 7
    },
    {
        id : "4",
        title : "Strawberry",
        price : 39.99,
        pictureUrl : "https://saschafitness.do/wp-content/uploads/2019/05/fresa-1.jpg",
        stock : "7",
        description : "lorem lorem  lorem   lorem   lorem"
    },
    {
        id : "4",
        title : "Fit 9",
        price : 44.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0647/8479/products/FIT9-1_2000x.png?v=1589470545",
        stock : 7
    }
]

const ItemListContainer = ({greeting}) => {

    const [items,setItems] = useState([])

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })

        pedido
        .then(res=>{
            setItems(res)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <ItemList items={items}/>
            <ProductosContainer stock={10} initial={1}/>
        </div>
    )
}
export default ItemListContainer