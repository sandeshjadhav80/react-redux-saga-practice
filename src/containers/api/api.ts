import axios from 'axios';
import {CATEGORY_LIST_MOCK} from './../mock-responses/category.mock';
import {PRODUCT_LIST_MOCK} from './../mock-responses/product.mock';

export const fetchCategoryApi = function(path: string) {

    const isMock = true;
    if(isMock) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({categoryList: CATEGORY_LIST_MOCK, status: 200});
            }, 2000);
        })
    } else {
        return axios.get(path);
    }

}

export const fetchProductApi = function(path: string) {

    const isMock = true;
    if(isMock) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({productList: PRODUCT_LIST_MOCK, status: 200});
            }, 2000);
        })
    } else {
        return axios.get(path);
    }

}