import React from "react";

function ProductList({ product }) {
  return (
    <div className="ProductList__list">
      <img src={product.img} alt={product.name} width="150" />
    </div>
  );
}

export default ProductList;
