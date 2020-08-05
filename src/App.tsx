import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

// application components
import Home from './containers/components/home';
import ProductDetails from './containers/components/product-details';

// store
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './containers/store/reducers/reducer';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './containers/store/sagas';

import {FETCH_CATEGORY} from './containers/store/actions/actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

// store.dispatch({type: FETCH_CATEGORY, value: {isCategoryFetchInProgress: true}});
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route component={Home} path="/" exact></Route>
        <Route component={ProductDetails} path="/product-details/:id" exact></Route>
      </HashRouter>
    </Provider>
  );
}

export default App;
