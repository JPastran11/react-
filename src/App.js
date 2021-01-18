
import ItemListContainer from './components/ItemListContainer.js'
import React from "react"
import NavBar from './components/NavBar'
import Header from './components/Header'
import Main from './components/Main'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'materialize-css/dist/css/materialize.css'
import ItemDetail from './components/ItemDetail'
import Loader from './components/Loader'
import Item from './components/Item'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter} from 'react-router-dom'

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>



export default function App() {
return (
    <BrowserRouter>
        <NavBar/>
        <img src="../img/logo.png"></img>
        <Header/>
        <ItemListContainer/>
        <Main/>
       
    </BrowserRouter>
)
}



