import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {connect} from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// custom imports
import Category from './../entity/category.entity';
import {FETCH_CATEGORY} from './../store/actions/actions';
import SingleCategoryComp from './single-category';
import {selectCategory} from './../store/reducers/reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface CategoryProps {
  categoryList: Category[];
  isCategoryFetched: boolean;
  isCategoryFetchInProgress: boolean;
  isCategoryFetchFailed: boolean;
  dispatch: any;
}

function CategoryComp(props: CategoryProps) {
  const classes = useStyles();
  console.log('props.isCategoryFetchInProgress', props.isCategoryFetchInProgress);
  if(props.isCategoryFetchInProgress === true) {
    return (
      <Grid>
        <h2>Category</h2>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Grid>
    );
  } else {
    console.log(props.categoryList);
    console.log('inside compenent');
    
    return (
      <Grid>
        <h2>Category</h2>
        
        <List className={classes.root}>
          {
            props.categoryList.map((category: Category, index: number) => (
              <SingleCategoryComp category={category} index={index} />
            ))
          }
        </List>
      </Grid>
    );
  }
  
}

const mapStateToProps = (state: any) => {
  return {
    categoryList: selectCategory(state),
    isCategoryFetched: state.isCategoryFetched,
    isCategoryFetchInProgress: state.isCategoryFetchInProgress,
    isCategoryFetchFailed: state.isCategoryFetchFailed,
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryComp);
