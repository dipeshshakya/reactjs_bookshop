import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar__link">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Checkout">Checkout</Link>
          <Link to="/Product">Product</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
