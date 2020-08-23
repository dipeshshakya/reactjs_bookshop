import React from "react";
// import { ProductContext } from "../MyContext";
import Book from "./Book";
import Grid from "@material-ui/core/Grid";
import Loading from "../components/Loading";

function ProductList({ books }) {
  if (!books) {
    return <Loading />;
  }
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
