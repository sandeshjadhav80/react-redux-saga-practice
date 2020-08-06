import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CategoryComp from './category';
import ProductsComp from './products';
import Category from './../entity/category.entity';
import Product from './../entity/product.entity';


import {connect} from 'react-redux';
import {FETCH_CATEGORY, FETCH_PRODUCTS} from './../store/actions/actions';

class Home extends React.Component<{dispatch: any, categoryList: Category[], productList: Product[]}, {}> {

    constructor(props: any){
        super(props);
    }
    componentDidMount() {
        if(this.props.categoryList.length === 0) {
            this.props.dispatch({type: FETCH_CATEGORY, value: {isCategoryFetchInProgress: true}});
        }
        if(this.props.productList.length === 0) {
            this.props.dispatch({type: FETCH_PRODUCTS, value: {isProductFetchInProgress: true}});
        }
    }
    render() {
        return (
            <Grid container>
                <Grid item sm={12} style={{height: '60px', background: 'whitesmoke'}}>Header</Grid>
                <Grid item sm={2}>
                    <CategoryComp />
                </Grid>
                <Grid item sm={10}>
                    <ProductsComp />
                </Grid>
            </Grid>
          );
    }
}
const mapStateToProps = (state: any) => {
    return {
      categoryList: state.categoryList,
      productList: state.productList
    };
  }
  const mapDispatchToProps = (dispatch: any) => {
    return {
      dispatch
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);