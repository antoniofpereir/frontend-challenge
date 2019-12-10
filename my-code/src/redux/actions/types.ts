import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { StoreState } from '../';

export type ReduxThunkAction = ThunkAction<void, StoreState, null, AnyAction>;
export type ReduxThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;
