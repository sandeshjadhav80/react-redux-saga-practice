import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import { selectProductById } from '../store/reducers/reducer';
import SingleProductComp from './single-product';
import {useLocation, Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProductDetails(props: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // const product = selectProductById(props.productList, props.match.params.id);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container>
        <Grid item sm={4}>test</Grid>
        <Grid item sm={8}>
          <h1>product details</h1>
          <SingleProductComp product={props.product} index={1} />

          <Link to="/">Back</Link>
        </Grid>
    </Grid>
  );
}

const mapStateToProps = (state: any, props: any) => {
  return {
    productList: state.productList,
    product: selectProductById(state, props)
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
