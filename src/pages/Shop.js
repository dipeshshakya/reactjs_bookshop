import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import ProductSearch from "../components/ProductSearch";
import ProductList from "../components/ProductList";
import MyContext from "../MyContext";
import products from "../data.js";

function Shop() {
  const user = useContext(MyContext);
  console.log(user);
  return (
    <>
      <div>
        <PageTitle title="shop" />
      </div>
      <ProductSearch />
      <div className="productList__wrapper">
        {/* {products.map((product) => ( */}
        {/* <ProductList product={product} key={product.id} /> */}
        {/* ))} */}
        <ProductList product={products} />
      </div>
    </>
  );
}

export default Shop;
