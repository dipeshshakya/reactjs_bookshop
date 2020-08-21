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
    price: 0,
  });
  useEffect(() => {
    let books = products;
    let maxPrice = Math.max(...books.map((item) => item.price));
    setState({
      ...state,
      books: books,
      maxPrice: maxPrice,
      sortedBook: books,
      loading: false,
      price: maxPrice,
    });
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setState(
      {
        ...state,
        [name]: value,
      },
      filterBooks()
    );
  };
  const filterBooks = () => {
    let { books, maxPrice, minPrice, type, category, price } = state;
    let tempBook = [...books];
    price = parseInt(price);
    // console.log(typeof price);
    // console.log(tempBook, price);
    if (type !== "all") {
      tempBook = tempBook.filter((book) => book.type === type);
    }
    tempBook = tempBook.filter((book) => book.price < price);

    setState({
      ...state,
      sortedBook: tempBook,
    });
    // console.log(state);
  };
  return (
    <ProductContext.Provider value={{ state, handleChange }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProviderContext;
