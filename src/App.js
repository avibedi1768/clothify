import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './MyComponents/jsx/Navbar';
import Home from './MyComponents/jsx/Home';
import Contact from './MyComponents/jsx/Contact';
import Shop from './MyComponents/jsx/Shop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/shop" Component={Shop} />
      </Routes>
    </Router>
  )
}

export default App;
