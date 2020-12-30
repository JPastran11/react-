import React from 'react'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import ItemListContainer from './components/ItemListContainer.js'


const App = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <Main/>
      <ItemListContainer greeting="Gracias a la tecnología que hemos incorporado brindamos un servicio de calidad, confiable y simple"/>
    </>
  )
}


export default App