import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Store from './Components/Store';
import OneProduct from './Components/product/oneProduct';
import OneCategory from './Components/category/oneCategory';
import Navbar from './Components/pageElements/Navbar';
import Cart from './Components/Cart';
import Order from "./Components/Order";
import About from './Components/About';
import Footer from "./Components/pageElements/Footer";
import Categories from './Components/category/Categories';

function App() {
  return ( 
    <div className="App">
    <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:x_id" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:product_id" element={<OneProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:cate_id" element={<OneCategory />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
