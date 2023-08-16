import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetails/ItemDetailContainer'
import Footer from './/Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import NotFound from './Components/404/NotFound'
import Home from './Components/Home/Home'
import { CartProvider } from './Context/CartContext'



const App = () => {
  return (
    <>
      <BrowserRouter>
      <CartProvider>

      <NavBar/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/items' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    
      <Footer/>

      </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
