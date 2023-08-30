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
import Checkout from './Components/Checkout/Checkout'
import Signup from './Components/page/Signup'
import Login from './Components/page/login'
import Contact from './Components/Contact/Contact'
import { AuthProvider } from "./Context/AuthContext";
; 

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <AuthProvider>
      
      <NavBar/>
      
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>

      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path='/items' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      
      </Routes>
      
        

      <Footer/>
      
      </AuthProvider>
      </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
