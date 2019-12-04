/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import throttle from 'lodash.throttle';
import rootReducer from './reducers';
import { loadState, saveState } from '../utils/reduxPersist';

const REDUX_LOCAL_STORAGE_NAME = 'moviesreduxstate';
const omdbApiKey = process.env.OMDB_API_KEY;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? compose(
    applyMiddleware(thunk.withExtraArgument(omdbApiKey)),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  ) : applyMiddleware(thunk.withExtraArgument(omdbApiKey));

const initialState = loadState(REDUX_LOCAL_STORAGE_NAME);

const store = createStore(
  rootReducer,
  initialState,
  enhancers,
);

store.subscribe(throttle(() => {
  saveState(REDUX_LOCAL_STORAGE_NAME, store.getState());
}, 1000));

export type StoreDispatch = typeof store.dispatch;

export type StoreState = ReturnType<typeof rootReducer>;

export default store;
