import React, { useContext } from "react";
import { ProductContext } from "../MyContext";

function ProductSearch({ books }) {
  const contextValue = useContext(ProductContext);
  const { state, handleChange } = contextValue;

  const { maxPrice, minPrice, type, category, price } = state;

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let types = getUnique(books, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let categories = getUnique(books, "category");
  categories = ["all", ...categories];

  categories = categories.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <div className="productSearch__wrapper">
      <form action="">
        <input type="text" placeholder="Keyword,author,title" />
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={category}
        >
          {categories}
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
        <select name="type" id="type" onChange={handleChange} value={type}>
          {types}
        </select>
      </form>
    </div>
  );
}

export default ProductSearch;
