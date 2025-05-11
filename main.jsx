/* eslint-disable react-refresh/only-export-components */
import React,{useState,useEffect} from "react";
import { createRoot } from "react-dom/client";
import "./project/project.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./project/Nav";
import Home from "./project/Home";
import Features from "./project/Features";
import Contact from "./project/Contact";
import Products from "./project/Products";
import Carts from "./project/Carts";

function Main() {
  const [data,setData] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
      fetch('https://dummyjson.com/products?sortBy=title&order=desc')
      .then( response=>response.json() )
      .then( (json)=>{setData(json.products)})
   
  },[])
  const addToCart=(item)=>{
setCart([...cart,item])
  }
  
   const deleteCartItem = (newVal) => {
    const x = cart.filter((item)=> item !== newVal);
    setCart(x)
    console.log("working")
  }
  return (
    <>
      <BrowserRouter>
      <header>
        <nav className="navbar">
          <div className="logo">
            Shop<span>Kar</span>
          </div>
          <Nav cart={cart}/>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products data={data} addToCart={addToCart}  />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Carts" element={<Carts cart={cart} deleteCartItem={deleteCartItem} />} />
      </Routes>
    </BrowserRouter>   
      <Footer/>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
