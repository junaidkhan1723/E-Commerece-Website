import React from "react";
import { Link } from "react-router-dom";
function Nav({cart}) {
  
  return (<>
    <div className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/Products">
        <li>Products</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
      <Link to="/Features">
        <li>Features</li>
      </Link>
    </div>
    <div className="nav-icons">
    <button className="icon-btn" >
        <i>🤵🏻</i>
    </button>
    <button className="icon-btn">
    <Link to="/Carts" >
        <i>🛒</i><span className="cart-count" >{cart.length}</span>
</Link>
    </button>
</div>
</>
  );
}

export default Nav;
