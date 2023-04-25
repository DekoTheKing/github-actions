import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Navbar from './components/Navbar.js';
import LoginForm from './components/LoginForm.js'
import './components/NavbarStyles.css';
import DemoForm from './components/DemoForm';

import CoffeeProducts from './components/CoffeeProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound.js';
import { createContext } from 'react';


 export const BasketContext = createContext({
    orders:[], 
    setOrders: () => {}
  })
function App() {
  const [orders,setOrders] = useState([])
  return (
    <>
    <BasketContext.Provider value={{orders,setOrders}}>
    <Navbar></Navbar>
    <Routes>
      <Route path='/'  element ={<Home />} />
      <Route path='/home'  element ={<Home />} />
      <Route path='/products' element={<CoffeeProducts/>} />   
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<DemoForm/>} />
      <Route path='contacts' element={<Contact/>} />   
      <Route path='/footer' element={<Footer/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BasketContext.Provider>
    
    </>
  );
}

export default App;
