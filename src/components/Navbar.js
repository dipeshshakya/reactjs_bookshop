import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Checkout">Checkout</Link>
        <Link to="/Product">Product</Link>
      </ul>
    </div>
  );
}

export default Navbar;
