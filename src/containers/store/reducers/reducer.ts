import {initialState} from './../store';
import {FETCH_CATEGORY, FETCH_PRODUCTS, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_SUCCESS} from './../actions/actions';

const reducer = (state=initialState, action:any) => {
    const newState = {...state};

    switch(action.type) {
        case FETCH_CATEGORY:
            newState.isCategoryFetchInProgress = action.value.isCategoryFetchInProgress;
            break;
        case FETCH_CATEGORY_SUCCESS:
            console.log(action);
            console.log('payload check');
            newState.categoryList = action.value.categoryList;
            newState.isCategoryFetchInProgress = false;
            break;

        case FETCH_PRODUCTS:
            newState.isProductFetchInProgress = action.value.isProductFetchInProgress;
            break;

        case FETCH_PRODUCT_SUCCESS:
            console.log(action);
            console.log('payload check');
            newState.productList = action.value.productList;
            newState.isProductFetchInProgress = false;
            break;
        
        
    }
    return newState;
}

export default reducer;