import test from 'tape';
import {runSaga} from 'redux-saga';
import { put, call } from 'redux-saga/effects'
import { fetchCategory, fetchProduct, incrementAsync, delay } from './sagas'
import {fetchCategoryApi} from '../api/api';
import {FETCH_CATEGORY_SUCCESS} from './actions/actions';
import {CATEGORY_LIST_MOCK} from '../mock-responses/category.mock';
import {initialState} from './store';

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
});

test('fetch category Saga test', (assert) => {
    const fetchCatGen = fetchCategory()
    
    // const
    assert.deepEqual(
      fetchCatGen.next().value,
      call(fetchCategoryApi, '/category'),
      'fetchCategory saga must call category api and get results'
    )
    // console.log('tesitng', fetchCatGen.response, fetchCatGen)
    const expectedResponse = {categoryList: CATEGORY_LIST_MOCK, status: 200};
    assert.deepEqual(
      fetchCatGen.next(expectedResponse).value,
      put({type: 'FETCH_CATEGORY_SUCCESS', value: expectedResponse}),
      'fetchCategory will trigger success action'
    )
  
    assert.deepEqual(
      fetchCatGen.next(),
      { done: true, value: undefined },
      'fetchCategory Saga must be done'
    )
  
    assert.end()
  });

  // test('practire', async (assert) => {
  //   const dispatchedAction: any = []

  //   const fakeStore = {
  //     getState: () => (initialState),
  //     dispatch: (action: any) => dispatchedAction.push(action)
  //   }

  //   await runSaga(fakeStore, fetchCategory).done;

  //   expect(1).toBe(1)
  //   expect(dispatchedAction).toContainEqual('tets')
   
  // });