import React, { useContext } from "react";
import { ProductContext } from "../MyContext";

function ProductSearch({ books }) {
  const contextValue = useContext(ProductContext);
  const {
    type,
    category,
    price,
    maxPrice,
    minPrice,
    handleChange,
  } = contextValue;
  console.log("from produtsearch", contextValue);
  return (
    <div className="productSearch__wrapper">
      <form action="">
        <input type="text" placeholder="Keyword,author,title" />
        <select name="" id="">
          <option>category1</option>
          <option>category2</option>
        </select>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          id="price"
          value={price}
          onChange={handleChange}
        />
        <select name="" id="">
          <option>category1</option>
          <option>category2</option>
        </select>
      </form>
    </div>
  );
}

export default ProductSearch;
