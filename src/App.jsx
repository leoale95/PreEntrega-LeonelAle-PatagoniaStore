import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetails/ItemDetailContainer'
import Footer from './/Components/Footer/Footer'



const App = () => {
  return (
    <>
      <BrowserRouter>

      <NavBar/>
    
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 Not found</h1>}/>
      </Routes>
    
      <Footer/>


      </BrowserRouter>
    </>
  )
}

export default App
