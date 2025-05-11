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
      <footer id="contact">
      <div className="footer-content">
        <div className="footer-column">
          <h3>ShopKar</h3>
          <p>
            Your one-stop destination for all your shopping needs with great
            deals and quality products.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul className="footer-links">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>Email: ShopKar@gmail.com</li>
            <li>Phone: +91 123456789 </li>
            <li>Address: 123 Main St, Nanded, India</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 ShopKar. All rights reserved.</p>
      </div>
    </footer>
      
    </>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
