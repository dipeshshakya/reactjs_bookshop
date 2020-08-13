import React from "react";
import { Link } from "react-router-dom";

function Banner({ title, subtitle, page_type }) {
  return (
    <div className="banner__wrapper">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to="rooms" className="btn-primary">
        Browse Books
      </Link>
    </div>
  );
}

export default Banner;
