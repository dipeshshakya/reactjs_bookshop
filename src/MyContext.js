import React, { useState, useEffect } from "react";
import products from "./data.js";
const ProductContext = React.createContext();
const formatData = (products) => {
  let tempBook = products.map((product) => {
    let id = product.id;
    let image = product.img;
    let author = product.author;
    let name = product.name;
    let price = product.price;
    let type = product.type;

    let description = product.description;
    let category = product.category;
    let inCart = product.inCart;
    let book = {
      id,
      image,
      author,
      name,
      price,
      type,
      description,
      category,
      inCart,
    };
    return book;
  });
  return tempBook;
};

function MyContext(props) {
  const { books, setBooks } = useState([""]);
  useEffect(() => {
    setBooks(formatData(products));
  });

  return (
    <ProductContext.Provider value={{ books }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default MyContext;
