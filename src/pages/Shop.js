import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import MyContext from "../MyContext";

function Shop() {
  const product = useContext(MyContext);
  console.log(product);
  return (
    <div>
      <PageTitle title="shop" />
    </div>
  );
}

export default Shop;
