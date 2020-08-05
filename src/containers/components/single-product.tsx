import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

// custom
import Product from './../entity/product.entity';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function SingleProductComp(props: any) {
  const classes = useStyles();
  return (
    <Grid item md={3} key={props.index}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.product.productImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.product.description.substring(0, 100)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                quantity: {props.product.quantity}
              </Button>
              <Button size="small" color="primary">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
  );

  
}
export default SingleProductComp;
