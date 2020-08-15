import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import ProductSearch from "../components/ProductSearch";
import ProductList from "../components/ProductList";
import MyContext from "../MyContext";
import products from "../data.js";
import Grid from "@material-ui/core/Grid";

function Shop() {
  const books = useContext(MyContext);
  console.log(books);
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
              {products.map((product) => (
                <Grid item xs={4} sm={6} md={4}>
                  <ProductList product={product} key={product.id} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Shop;
