import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { ProductContext } from "../MyContext";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(4),
    alignContent: "center",
    paddingTop: "50px",
  },
}));
function Product(props) {
  const classes = useStyles();

  const books = useContext(ProductContext);
  // const { getSingleBook } = context;
  // const book = getSingleBook(books.slug);

  const slug = props.match.params.slug;

  const book = books.find((b) => b.slug === slug);
  const { id, name, author, description, img, price, inCart, category, type } =
    book || {};
  if (!book) {
    return <PageTitle title=" Sorry not found " />;
  }

  return (
    <div>
      <PageTitle title={name} />
      <Grid container spacing={4} fixed>
        <Grid item xs></Grid>
        <Grid item xs={9}>
          <div className="singleProduct__wrapper">
            <Grid container spacing={2}>
              <Grid item xs={4} className={classes.innerGrid}>
                <img src={img} alt={name} />
              </Grid>
              <Grid item xs={8} className={classes.innerGrid}>
                <Grid item xs>
                  <Typography variant="h5" gutterBottom>
                    {author}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1">${price}</Typography>
                </Grid>

                <Typography variant="subtitle1" gutterBottom>
                  Category: {category}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Type: {type}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default Product;
