import { put, takeEvery, all, call } from 'redux-saga/effects';
import {fetchCategoryApi, fetchProductApi} from './../api/api';
import {FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCTS} from './actions/actions';

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync(): any {
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}

export function* helloSaga(): any {
    console.log('Hello Sagas!')
}

export function* watchIncrementAsync():any {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// midleware implementation to fetch category
export function* fetchCategory() {
    console.log('fetchCategory called');
    
    const categoryResponse = yield call(fetchCategoryApi, '/category');
    yield put({type: FETCH_CATEGORY_SUCCESS, value: categoryResponse});
}   
// midleware registration/binding
export function* watchFetchCategory() {
    yield takeEvery(FETCH_CATEGORY, fetchCategory);
}

// midleware implementation to fetch category
export function* fetchProduct() {
    const productResponse = yield call(fetchProductApi, '/product');
    yield put({type: FETCH_PRODUCT_SUCCESS, value: productResponse});
}   
// midleware registration/binding
export function* watchFetchProduct() {
    yield takeEvery(FETCH_PRODUCTS, fetchProduct);
}

// notice how we now only export to rootSaga
// single entry point to start all saga at once
export default function* rootSaga(): any {
    yield all([
      helloSaga(),
      watchFetchCategory(),
      watchFetchProduct(),
    //   watchIncrementAsync()
    ])
}