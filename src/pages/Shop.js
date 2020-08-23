import React, { useContext } from "react";
import { ProductContext } from "../MyContext";
import PageTitle from "../components/PageTitle";
import ProductSearch from "../components/ProductSearch";
import ProductList from "../components/ProductList";
// import products from "../data.js";
import Grid from "@material-ui/core/Grid";

function Shop() {
  const { state } = useContext(ProductContext);
  const { loading, books, sortedBook } = state;
  
  return (
    <>
      <div>
        <PageTitle title="shop" />
      </div>
      <Grid container>
        <Grid item xs>
          <ProductSearch books={books} />
        </Grid>
        <Grid item xs={8}>
          <div className="productList__wrapper">
            <Grid container>
              <ProductList books={sortedBook} />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Shop;
