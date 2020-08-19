import React, { useContext } from "react";
import { ProductContext } from "../MyContext";
import Book from "./Book";
// import data from "../data.js";

function ProductList() {
  const books = useContext(ProductContext);

  // console.log(books);
  return (
    <div className="ProductList__list">
      {books.map((item) => {
        return <Book book={item} key={item.id} />;
      })}
    </div>
  );
}

export default ProductList;
