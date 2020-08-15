import React from "react";
import PageTitle from "../components/PageTitle";
import products from "../data.js";

function Product() {
  console.log(products);
  return (
    <div>
      <PageTitle title="product" />
    </div>
  );
}

export default Product;
