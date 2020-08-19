import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { ProductContext } from "../MyContext";

function Product() {
  const books = useContext(ProductContext);
  const { getSingleBook } = context;
  const book = getSingleBook(books.slug);

  return (
    <div>
      <PageTitle title="product" />
    </div>
  );
}

export default Product;
