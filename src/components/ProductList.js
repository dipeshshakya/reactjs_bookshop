import React from "react";
// import { ProductContext } from "../MyContext";
import Book from "./Book";
import Grid from "@material-ui/core/Grid";

// import data from "../data.js";

function ProductList({ books }) {
  // const { books } = useContext(ProductContext);
  // console.log("from shop", books);
  return (
    <div className="ProductList__list">
      {books.map((item) => {
        return (
          <Grid item>
            <Book book={item} key={item.id} />
          </Grid>
        );
      })}
    </div>
  );
}

export default ProductList;
