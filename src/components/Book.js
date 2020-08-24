import React, { useContext } from "react";
import { ProductContext } from "../MyContext";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
    // display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  priceBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
function Book({ book }) {
  const { addToCart } = useContext(ProductContext);
  const classes = useStyles();
  const { id, name, author, img, price, slug } = book;
  return (
    <div className={classes.root} id={id}>
      <Paper className={classes.paper} id={id}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {author}
                </Typography>
                <Typography variant="body2" color="textSecondary"></Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <Link to={`/book/${slug}`}> Learn more</Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.priceBox}>
              <Typography variant="subtitle1">${price}</Typography>
              <IconButton id={id} onClick={addToCart}>
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Book;
