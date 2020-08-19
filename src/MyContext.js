import React, { createContext, useEffect, useState } from "react";
import products from "./data.js";
export const ProductContext = createContext({});

export const ProviderContext = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(...books, products);
  }, []);

  // const getSingleBook = (slug) => {
  //   let tempBook = books;
  //   const bookFound = tempBook.find((book) => book.slug === slug);
  //   return bookFound;
  // };
  return (
    <ProductContext.Provider value={books}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProviderContext;
