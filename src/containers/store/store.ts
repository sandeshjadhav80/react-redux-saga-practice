import Category from './../entity/category.entity';
import Product from './../entity/product.entity';

export interface store {
    categoryList: Category[],
    isCategoryFetched: boolean,
    isCategoryFetchInProgress: boolean,
    isCategoryFetchFailed: boolean,

    productList: Product[],
    isProductFetched: boolean,
    isProductFetchInProgress: boolean,
    isProductFetchFailed: boolean,
}

export const initialState: store = {
    categoryList: [],
    isCategoryFetched: false,
    isCategoryFetchInProgress: true,
    isCategoryFetchFailed: false,

    productList: [],
    isProductFetched: false,
    isProductFetchInProgress: true,
    isProductFetchFailed: false,
}