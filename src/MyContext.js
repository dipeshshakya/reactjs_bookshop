import React, { createContext } from "react";
export const ProductContext = createContext();

export const ProviderContext = (props) => {
  return (
    <ProductContext.Provider value="hello  context">
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProviderContext;
