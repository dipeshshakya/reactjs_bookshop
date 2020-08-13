import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
