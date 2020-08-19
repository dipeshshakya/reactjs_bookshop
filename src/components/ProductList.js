import React, { useContext } from "react";
import { ProductContext } from "../MyContext";
function ProductList() {
  const msg = useContext(ProductContext);
  return (
    <div className="ProductList__list">
      {msg}
      {/* <button onClick={() => setBooks(true)}>click</button> */}
    </div>
  );
}

export default ProductList;
