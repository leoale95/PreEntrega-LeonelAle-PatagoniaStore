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
import SignupCard from './Components/SignIn/Signupcard'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <>
      <BrowserRouter>
      <CartProvider>

      <NavBar/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignupCard />} />
      <Route path='/items' element={<ItemListContainer/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    
      <Footer/>

      </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
