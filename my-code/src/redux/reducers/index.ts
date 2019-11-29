import { combineReducers } from 'redux';
import moviesData from './moviesReducer';

const rootReducer = combineReducers({
  moviesData,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
