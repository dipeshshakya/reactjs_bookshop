import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ProductList({ product }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={6} md={4}>
          <Paper className={classes.paper}>
            <img src={product.img} alt={product.name} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Paper className={classes.paper}>
            <img src={product.img} alt={product.name} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Paper className={classes.paper}>
            <img src={product.img} alt={product.name} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Paper className={classes.paper}>
            <img src={product.img} alt={product.name} />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Paper className={classes.paper}>
            <img src={product.img} alt={product.name} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
