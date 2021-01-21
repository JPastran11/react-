
import ItemListContainer from './components/ItemListContainer.js'
import React, { useContext } from "react"
import NavBar from './components/NavBar'
import Header from './components/Header'
import Main from './components/Main'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'materialize-css/dist/css/materialize.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import listContext from './components/listContext'
import CartProvider from './components/CartContext'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

const products =  [
    {
        categoryId: "WheyProtein",
        id : "GUIDEDIGITAL1",
        title : "Digital Guide, Bye Bye Celulitis",
        price : 12.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0003/8030/5461/files/BBC-2_4714da68-0838-4325-85ba-891c7b33a44d.png?13241607669691707150",
        stock : 5,
        initial: 1
    },
    {
        categoryId : "WheyProtein",
        id : "WHEYPROTEIN2",
        title : "Chocolate",
        price : 39.99,
        pictureUrl : "https://saschafitnesscol.com/wp-content/uploads/2017/08/chocolate1.png",
        stock : 4,
        initial: 1
    },
    {
        categoryId : "Glutamine",
        id : "GLUTAMINE3",
        title : "Watermelon",
        price : 34.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/2488/8468/products/bcaa-sascha-fitness-glutamina-aminoacidos-s-lima-limon-D_NQ_NP_671430-MCO26925384309_022018-F.jpg?v=1582402237",
        stock : 6,
        initial: 1
    },
    {
        categoryId : "WheyProtein",
        id : "WHEYPROTEIN4",
        title : "Vanilla",
        price : 39.99,
        pictureUrl : "https://saschafitnesscol.com/wp-content/uploads/2017/08/vanilla1.png",
        stock : 7,
        initial: 1
    },
    {   
        categoryId : "Gltamine",
        id : "GLUTAMINE5",
        title : "Grape",
        price : 34.99,
        pictureUrl : "https://i.ebayimg.com/images/g/ZSgAAOSwJUdejhzG/s-l1600.jpg",
        stock : 7,
        initial: 1
    },
    {
        categoryId : "Glutamine",
        id : "GLUTAMINE6",
        title : "Mango Loco",
        price : 34.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0276/6084/5153/products/BCAA-mangococo1.jpg?v=1594222488",
        stock : 7,
        initial: 1
    },
    {   
        categoryId : "Whey Protein",
        id : "WHEYPROTEIN7",
        title : "Strawberry",
        price : 39.99,
        pictureUrl : "https://saschafitness.do/wp-content/uploads/2019/05/fresa-1.jpg",
        stock : 7,
        initial: 1
    },
    {
        categoryId : "Glutamine",
        id : "FAT8",
        title : "Fit 9",
        price : 44.99,
        pictureUrl : "https://cdn.shopify.com/s/files/1/0647/8479/products/FIT9-1_2000x.png?v=1589470545",
        stock : 7,
        initial: 1
    }
]


export default function App() {
return (
    <BrowserRouter>
        <NavBar/>
        <img src="../img/logo.png"></img>
        <Header/>
        <ItemListContainer/>
        
        <Main>
        <Switch>

<Route path="/" exact>
    <ItemListContainer/> 
</Route>

<Route path="/category/:id">
    <ItemListContainer/> 
</Route>

<Route path="/item/:id">
    <ItemDetailContainer/>
</Route>

</Switch>
</Main>
        <listState/>
    </BrowserRouter>
    
)
}





