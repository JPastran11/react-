  
import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import {firestore} from './firebase'
/*
const products =  [
    {
        category : "1",
        id : "GUIDEDIGITAL1",
        title : "Digital Guide, Bye Bye Celulitis",
        price : 12.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0003/8030/5461/files/BBC-2_4714da68-0838-4325-85ba-891c7b33a44d.png?13241607669691707150",
        stock : 5,
    },
    {
        category : "1",
        id : "WHEYPROTEIN2",
        title : "Chocolate",
        price : 39.99,
        pictureUrl : "https://saschafitnesscol.com/wp-content/uploads/2017/08/chocolate1.png",
        stock : 4
    },
    {
        category : "2",
        id : "GLUTAMINE3",
        title : "Watermelon",
        price : 34.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237",
        stock : 6
    },
    {
        category : "1",
        id : "WHEYPROTEIN4",
        title : "Vanilla",
        price : 39.99,
        pictureUrl : "https://saschafitnesscol.com/wp-content/uploads/2017/08/vanilla1.png",
        stock : 7
    },
    {   
        category : "2",
        id : "GLUTAMINE5",
        title : "Grape",
        price : 34.99,
        pictureUrl : "https://i.ebayimg.com/images/g/ZSgAAOSwJUdejhzG/s-l1600.jpg",
        stock : 7
    },
    {
        category : "2",
        id : "GLUTAMINE6",
        title : "Mango Loco",
        price : 34.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0276/6084/5153/products/BCAA-mangococo1.jpg?v=1594222488",
        stock : 7
    },
    {   
        category : "1",
        id : "WHEYPROTEIN7",
        title : "Strawberry",
        price : 39.99,
        pictureUrl : "https://saschafitness.do/wp-content/uploads/2019/05/fresa-1.jpg",
        stock : 7
    },
    {
        category : "2",
        id : "FAT8",
        title : "Fit 9",
        price : 44.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0647/8479/products/FIT9-1_2000x.png?v=1589470545",
        stock : 7
    }
]
*/
function ItemDetailContainer () {

    const [fireItem,setFireItem] = useState()
    const {id} = useParams()
/*
    useEffect(()=>{

       const pedido = new Promise((res,rej)=>{
            setTimeout(function(){
                const i = products.find(product => product.id === parseInt(id))
                res(i)
            },2000)
        })

        pedido.then(result => setItem(result)) 
        pedido.catch(err => console.log("Algo salio mal")) 

    },[id])
*/
useEffect(() => {
    const db = firestore
    const collection = db.collection('products') 
    const item = collection.doc(id)

    item.get()
     .then( (i) => {
       setFireItem({ id: i.id, ...i.data()})
     })

 },  [id]);

 return (
    <div className="itemDetailContainer">
       
        { fireItem ?
        <ItemDetail
         item={fireItem}
         id={fireItem.id}
         name={fireItem.name}     
         price={fireItem.price}
         image={fireItem.image}
         description={fireItem.description}
         stock={fireItem.stock}
         initial={fireItem.initial}
         />
         :
         <h2><Loader/></h2>}
    </div>
)
}

export default ItemDetailContainer