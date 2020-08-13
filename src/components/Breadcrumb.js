import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

function Breadcrumb({ title }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb__wrapper">
      <Typography variant="caption" color="textPrimary">
        <Link to="/">Home</Link>
      </Typography>
      <Typography variant="caption" color="textPrimary">
        {title}
      </Typography>
    </Breadcrumbs>
  );
}
export default Breadcrumb;
