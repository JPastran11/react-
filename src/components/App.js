
import ItemListContainer from './ItemListContainer.js'
import NavBar from './NavBar'
import Header from './Header'
import Main from './Main'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'materialize-css/dist/css/materialize.css'
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {firestore} from "./firebase"
import Cart from './Cart';
import CartProvider from './CartContext';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>


/*
const products =  [
    {
        categoryId: "WheyProtein",
        id : "GUIDEDIGITAL1",
        title : "Digital Guide, Bye Bye Celulitis",
        price : 12.99,
        image : "https://cdn.shopify.com/s/files/1/0003/8030/5461/files/BBC-2_4714da68-0838-4325-85ba-891c7b33a44d.png?13241607669691707150",
        stock : 5,
        initial: 1
    },
    {
        categoryId : "WheyProtein",
        id : "WHEYPROTEIN2",
        title : "Chocolate",
        price : 39.99,
        image : "https://saschafitnesscol.com/wp-content/uploads/2017/08/chocolate1.png",
        stock : 4,
        initial: 1
    },
    {
        categoryId : "Glutamine",
        id : "GLUTAMINE3",
        title : "Watermelon",
        price : 34.99,
        image : "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237",
        stock : 6,
        initial: 1
    },
    {
        categoryId : "WheyProtein",
        id : "WHEYPROTEIN4",
        title : "Vanilla",
        price : 39.99,
        image : "https://saschafitnesscol.com/wp-content/uploads/2017/08/vanilla1.png",
        stock : 7,
        initial: 1
    },
    {   
        categoryId : "Gltamine",
        id : "GLUTAMINE5",
        title : "Grape",
        price : 34.99,
        image : "https://i.ebayimg.com/images/g/ZSgAAOSwJUdejhzG/s-l1600.jpg",
        stock : 7,
        initial: 1
    },
    {
        categoryId : "Glutamine",
        id : "GLUTAMINE6",
        title : "Mango Loco",
        price : 34.99,
        image : "https://cdn.shopify.com/s/files/1/0276/6084/5153/products/BCAA-mangococo1.jpg?v=1594222488",
        stock : 7,
        initial: 1
    },
    {   
        categoryId : "Whey Protein",
        id : "WHEYPROTEIN7",
        title : "Strawberry",
        price : 39.99,
        image : "https://saschafitness.do/wp-content/uploads/2019/05/fresa-1.jpg",
        stock : 7,
        initial: 1
    },
    {
        categoryId : "Glutamine",
        id : "FAT8",
        title : "Fit 9",
        price : 44.99,
        image : "https://cdn.shopify.com/s/files/1/0647/8479/products/FIT9-1_2000x.png?v=1589470545",
        stock : 7,
        initial: 1
    }
]

*/
 function App() {
    const [ fireItems, setFireItems ] = useState([])
    
    useEffect(() => {
        const db = firestore
        const collection = db.collection('products')
        const query = collection.get()
        query
          .then((result) => {
            setFireItems(result.docs.map(p => ({id: p.id, ...p.data()})))
            console.log(fireItems)
          })
          .catch((error) => {
            console.log(error)
          })
    }, [fireItems])
  
    console.log(fireItems)
return (
    <CartProvider>
    <BrowserRouter>
        <NavBar/>
        <Header/>
        <ItemListContainer/>
        
        <Main/>
        <Switch>

        <Route exact path="/">
            <ItemListContainer greeting="Lista de Productos" products={fireItems} />
          </Route>

         

          <Route exact path="/category/:id">
            <ItemListContainer greeting="Nombre de Productos" products={fireItems} />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

</Switch>

       
    </BrowserRouter>
    </CartProvider>
);
}
export default App





