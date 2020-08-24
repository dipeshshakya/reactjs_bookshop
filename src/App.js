import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { ProviderContext } from "./MyContext";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProviderContext>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shop" component={Shop} />
          {/* <Route exact path="/Product" component={Product} /> */}
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/Book/:slug" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </ProviderContext>
    </div>
  );
}

export default App;
