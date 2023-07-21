import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemCount from './Components/ItemCount'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenido a mi pagina"
      />
      <ItemCount/>
    </>
  )
}

export default App
