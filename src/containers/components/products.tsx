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
import SingleProductComp from './single-product';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface ProductCompProps {
  productList: Product[],
  isProductFetched: boolean,
  isProductFetchInProgress: boolean,
  isProductFetchFailed: boolean,
  dispatch: any
}
function ProductComp(props: ProductCompProps) {
  const classes = useStyles();
  const noSkeleton = [1, 2, 3, 4]

  if(props.isProductFetchInProgress === true) {
    return (
      <Grid container spacing={2}>
        <Grid item md={12} key={'g1'}>
          <h2>Product List</h2>
        </Grid>
        {
          noSkeleton.map((value: number, index: number) => (
            <Grid item md={3} key={'g' + index}>
              <Skeleton key={1} variant="rect" height={100} />
              <Skeleton  key={2} variant="text" />
              <Skeleton  key={3} variant="text" />
              <Skeleton  key={4} variant="text" />
            </Grid>
          ))
        }
        
      </Grid>
    )
  } else {
    return (
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h2>Product List</h2>
        </Grid>
        {
          props.productList.map((product: Product, index:number) => (
           <SingleProductComp product={product} index={index} />
          ))
        }
        
      </Grid>
      
    );
  }
  
}


const mapStateToProps = (state: any) => {
  return {
    productList: state.productList,
    isProductFetched: state.isProductFetched,
    isProductFetchInProgress: state.isProductFetchInProgress,
    isProductFetchFailed: state.isProductFetchFailed,
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductComp);
