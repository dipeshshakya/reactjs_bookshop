import React from "react";
import PageTitle from "../components/PageTitle";
import ProductSearch from "../components/ProductSearch";
import ProductList from "../components/ProductList";
// import products from "../data.js";
import Grid from "@material-ui/core/Grid";

function Shop() {
  return (
    <>
      <div>
        <PageTitle title="shop" />
      </div>
      <Grid container>
        <Grid item xs>
          <ProductSearch />
        </Grid>
        <Grid item xs={8}>
          <div className="productList__wrapper">
            <Grid container>
              <ProductList />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Shop;
