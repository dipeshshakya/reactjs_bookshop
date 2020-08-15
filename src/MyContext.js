import React, { useEffect, useState } from "react";
import products from "./data.js";
const ProductContext = React.createContext();
const formatData = (products) => {
  let tempBook = products.map((product) => {
    let id = product.id;
    let img = product.img;
    let author = product.author;
    let name = product.name;
    let price = product.price;
    let type = product.type;

    let description = product.description;
    let category = product.category;
    let inCart = product.inCart;
    let book = {
      id,
      img,
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
  const { books, setBooks } = useState([]);
  // const { sortedBook, setSortedBook } = useState([]);
  // const { loading, setLoading } = useState(false);

  useEffect(() => {
    let bookData = formatData(products);
    setBooks(bookData);
    let maxPrice = Math.max(...bookData.map((item) => item.price));

    console.log(formatData(maxPrice));
  });

  return (
    <ProductContext.Provider value={{ books }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default MyContext;
