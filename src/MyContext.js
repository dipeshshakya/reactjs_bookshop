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
  const [flag, setFlag] = useState(false);

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
    setFlag(false);

    setState({
      ...state,
      [name]: value,
      sortedBook: [],
    });
    setFlag(true);
  };

  useEffect(() => {
    if (!flag) {
      // console.log("effect called without change - by default");
    } else {
      // console.log("effect called with change ");
      const filterBooks = () => {
        let { books, maxPrice, minPrice, type, category, price } = state;
        let tempBook = [...books];

        if (type !== "all") {
          tempBook = tempBook.filter((book) => book.type === type);
        }
        tempBook = tempBook.filter((book) => book.price < parseInt(price));
        // console.log("from tempbook", tempBook);
        setState({
          ...state,
          sortedBook: tempBook,
        });
      };

      filterBooks();
    }
    // console.log(state);
  }, [state.price, flag]);

  return (
    <ProductContext.Provider value={{ state, handleChange }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProviderContext;
