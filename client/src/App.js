import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'
import Home from "./Component/MainPage/Home/Home";
import About from "./Component/MainPage/About/About";
import Contact from "./Component/MainPage/Contact/Contact";
import NotFound from './Component/NotFound/NotFound'
import Footer from './Component/Footer/Footer'
import Product from './Component/MainPage/Product/Product.jsx'
import data from './LocalData/data.json'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path="/about" element={<About />}  exact/>
            <Route path="/product" element={<Product />}  exact/>
            <Route path="/contact" element={<Contact />}  exact/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer foonav={data.foonav} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;