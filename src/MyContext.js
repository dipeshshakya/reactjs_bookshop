import React, { createContext, useEffect, useState } from "react";
import products from "./data.js";
export const ProductContext = createContext({});

export const ProviderContext = (props) => {
  const [state, setState] = useState({
    books: [],
    maxPrice: 0,
    minPrice: 0,
    type: "all",
    category: "all",
    loading: true,
    sortedBook: [],
  });
  useEffect(() => {
    let books = products;
    let maxPrice = Math.max(...books.map((item) => item.price));
    console.log(maxPrice);
    setState({
      books: books,
      maxPrice,
      sortedBook: books,
      loading: false,
      price: maxPrice,
    });
  }, []);
  // console.log(state);

  // const getSingleBook = (slug) => {
  //   let tempBook = books;
  //   const bookFound = tempBook.find((book) => book.slug === slug);
  //   return bookFound;
  // };
  return (
    <ProductContext.Provider value={state}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProviderContext;
