import React from "react";
import Breadcrumb from "./Breadcrumb";

function pageTitle({ title }) {
  return (
    <div className="title__wrapper">
      <h1>{title}</h1>
      <Breadcrumb  title={title}/>
    </div>
  );
}

export default pageTitle;
