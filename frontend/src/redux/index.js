/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './app.reducer';

const middlewareEnhancer = applyMiddleware(...[thunk]);
const middlewares = [
  middlewareEnhancer,
  ...(process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : []),
];

const enhancer = compose(...middlewares);


const store = initialState => {
  return createStore(reducer, initialState, enhancer);
};

export default store;
