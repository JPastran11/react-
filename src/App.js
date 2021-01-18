
import ItemListContainer from './components/ItemListContainer.js'
import React from "react"
import NavBar from './components/NavBar'
import Header from './components/Header'
import Main from './components/Main'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'materialize-css/dist/css/materialize.css'
import ItemDetailContainer from './components/ItemDetailContainer'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>



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
       
    </BrowserRouter>
)
}



