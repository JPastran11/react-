import React , { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

const ItemDetailContainer = () => {

    const [item,setItem] = useState()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res({
                    id : "3",
                    title: "Watermelon",
                    price : 34.99,
                    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
                    pictures : [
                        "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237",
                        "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237",
                        "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237"
                    ]
                })
            },2000)
        })

        pedido
        .then(res=>{
            setItem(res)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer