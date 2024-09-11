import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './MyComponents/jsx/Navbar';
import Home from './MyComponents/jsx/Home';
import ThankYou from './MyComponents/jsx/ThankYou';
import Shop from './MyComponents/jsx/Shop';
import Checkout from './MyComponents/jsx/Checkout';
import Footer from './MyComponents/jsx/Footer';
import GoUp from './MyComponents/jsx/GoUp';
import Admin from './MyComponents/jsx/Admin'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/thankyou" Component={ThankYou} />
        <Route path="/shop" Component={Shop} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/admin" Component={Admin} />
      </Routes>
      <Footer />
      <GoUp />
    </Router>
  )
}

export default App;
