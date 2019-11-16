/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import testReducer from './reducers';

const store = createStore(
  testReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
