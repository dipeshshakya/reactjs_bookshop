import React from "react";

function ProductSearch() {
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
          min="1"
          max="100"
          value="50"
          class="slider"
          id="myRange"
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
