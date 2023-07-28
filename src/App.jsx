import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemDetails/ItemListContainer'
import ItemCount from './Components/Cart/ItemCount'


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a mi pagina"/>
      <ItemCount/>
      
    </>
  )
}

export default App
