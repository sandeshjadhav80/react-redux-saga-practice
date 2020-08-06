import {initialState, store} from './../store';
import {FETCH_CATEGORY, FETCH_PRODUCTS, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_SUCCESS} from './../actions/actions';
import Product from './../../entity/product.entity';
import { createSelector } from 'reselect'

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

// creating selectors and centralising state data transformation into the same function
export const selectCategory = (state: store) => {
    // transformation here if any
    return state.categoryList;
};

export const selectProduct = (state: store) => {
    // trasnformaiton here
    return state.productList;
}

// getting single category detail by id
export const selectCategoryById = (state: store, categoryId: string) => {
    return state.categoryList.find(category => category.categoryId === categoryId);
}

// in same manner getting produc it
// export const selectProductById = (productList: Product[], productId: string) => {
//     console.log('search operation is perform', productId);
    
//     return productList.find(product => product.productId === productId);
// }

// creating selectors and centralising state data transformation into the same function
export const selectProduct1 = (state: store, props: any) => {
    // transformation here if any
    return state.productList;
};
export const getId =(state: store, props:any) => {
    return props.match.params.id;
}
export const selectProductById = createSelector(
    selectProduct1, getId, 
    (productList, productId) => {
        console.log('create selector called', productId);
        
        return productList.find(product => product.productId === productId)
    } 
);

export default reducer;